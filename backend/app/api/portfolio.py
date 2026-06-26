from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.models.portfolio import Portfolio
from app.models.user import User
from app.schemas.portfolio import PortfolioCreate, PortfolioResponse, PortfolioUpdate
from app.api.deps import get_current_user

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