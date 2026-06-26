from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.models.portfolio import Portfolio
from app.models.user import User
from app.schemas.portfolio import PortfolioCreate, PortfolioResponse, PortfolioUpdate
from app.api.deps import get_current_user
from app.utils.market import get_live_stock_prices
from app.models.holding import Holding

router = APIRouter()

# 1. CREATE PORTFOLIO
@router.post("/", response_model=PortfolioResponse, status_code=status.HTTP_201_CREATED)
def create_portfolio(
    portfolio_in: PortfolioCreate, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    new_portfolio = Portfolio(
        **portfolio_in.model_dump(),
        user_id=current_user.id
    )
    db.add(new_portfolio)
    db.commit()
    db.refresh(new_portfolio)
    return new_portfolio


# 2. READ ALL PORTFOLIOS (Belonging exclusively to logged-in user)
@router.get("/", response_model=List[PortfolioResponse])
def get_portfolios(
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    return db.query(Portfolio).filter(Portfolio.user_id == current_user.id).all()


# 3. READ SINGLE PORTFOLIO BY ID
@router.get("/{id}", response_model=PortfolioResponse)
def get_portfolio_by_id(
    id: int, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    portfolio = db.query(Portfolio).filter(Portfolio.id == id, Portfolio.user_id == current_user.id).first()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found or unauthorized.")
    return portfolio


# 4. UPDATE PORTFOLIO
@router.put("/{id}", response_model=PortfolioResponse)
def update_portfolio(
    id: int, 
    portfolio_in: PortfolioUpdate, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    portfolio = db.query(Portfolio).filter(Portfolio.id == id, Portfolio.user_id == current_user.id).first()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found or unauthorized.")
        
    for key, value in portfolio_in.model_dump(exclude_unset=True).items():
        setattr(portfolio, key, value)
        
    db.commit()
    db.refresh(portfolio)
    return portfolio


# 5. DELETE PORTFOLIO
@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_portfolio(
    id: int, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    portfolio = db.query(Portfolio).filter(Portfolio.id == id, Portfolio.user_id == current_user.id).first()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found or unauthorized.")
        
    db.delete(portfolio)
    db.commit()
    return None

@router.get("/{portfolio_id}/dashboard", status_code=200)
def get_portfolio_dashboard(
    portfolio_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    portfolio = db.query(Portfolio).filter(Portfolio.id == portfolio_id, Portfolio.user_id == current_user.id).first()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio Not Found or Unauthorized.")
    
    holdings = db.query(Holding).filter(Holding.portfolio_id == portfolio_id).all()
    
    total_invested = 0.0
    current_value = 0.0
    holdings_summary = []
    
    for holding in holdings:
        try:
            live_price = get_live_stock_prices(holding.ticker, db)
        except Exception:
            live_price = holding.average_price
            
        holding_invested = holding.quantity * holding.average_price
        holding_current_value = holding.quantity * live_price
        holding_pnl = holding_current_value - holding_invested
        holding_pnl_pct = (holding_pnl/ holding_invested*100) if holding_invested > 0 else 0.0
        
        total_invested += holding_invested
        current_value += holding_current_value
        
        holdings_summary.append({
            "id": holding.id,
            "ticker": holding.ticker,
            "quantity": holding.quantity,
            "average_price": holding.average_price,
            "current_price": live_price,
            "total_invested": round(holding_invested, 2),
            "current_value": round(holding_current_value, 2),
            "pnl": round(holding_pnl, 2),
            "pnl_percentage": round(holding_pnl_pct, 2),
            "exchange": holding.exchange
        })
    
    total_pnl = current_value - total_invested
    total_pnl_pct = (total_pnl / total_invested * 100) if total_invested > 0 else 0.0
    
    return{
        "portfolio_metadat":{
            "id": portfolio.id,
            "name": portfolio.name,
            "description": portfolio.description
        },
        "metrics":{
            "total_invested": round(total_invested, 2),
            "current_value": round(current_value, 2),
            "total_pnl": round(total_pnl, 2),
            "total_pnl_percentage": round(total_pnl_pct, 2)
        },
        "holdings": holdings_summary
    }
    