from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.models.portfolio import Portfolio
from app.models.holding import Holding
from app.models.transaction import Transaction
from app.models.user import User
from app.schemas.holding import TransactionCreate, TransactionResponse, HoldingResponse
from app.api.deps import get_current_user

router = APIRouter()

@router.post("/{portfolio_id}/transactions", response_model=TransactionResponse, status_code=status.HTTP_201_CREATED)
def record_transaction(
    portfolio_id: int,
    tx_in: TransactionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    
    portfolio = db.query(Portfolio).filter(Portfolio.id == portfolio_id, Portfolio.user_id == current_user.id).first()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found or unauthorized.")

    tx_type = tx_in.transaction_type.upper()
    if tx_type not in ["BUY", "SELL"]:
        raise HTTPException(status_code=400, detail="Transaction type must be 'BUY' or 'SELL'.")

    
    new_tx = Transaction(
        **tx_in.model_dump(),
        portfolio_id=portfolio_id
    )
    db.add(new_tx)

    
    holding = db.query(Holding).filter(Holding.portfolio_id == portfolio_id, Holding.ticker == tx_in.ticker.upper()).first()

    if tx_type == "BUY":
        if holding:
            
            total_cost = (holding.quantity * holding.average_price) + (tx_in.quantity * tx_in.price)
            new_quantity = holding.quantity + tx_in.quantity
            holding.average_price = total_cost / new_quantity if new_quantity > 0 else 0.0
            holding.quantity = new_quantity
        else:
            
            new_holding = Holding(
                portfolio_id=portfolio_id,
                ticker=tx_in.ticker.upper(),
                quantity=tx_in.quantity,
                average_price=tx_in.price,
                exchange="NASDAQ"
            )
            db.add(new_holding)

    elif tx_type == "SELL":
        if not holding or holding.quantity < tx_in.quantity:
            raise HTTPException(status_code=400, detail="Insufficient stock holdings available to execute this sale.")
        
        holding.quantity -= tx_in.quantity
        
        if holding.quantity == 0:
            db.delete(holding)

    db.commit()
    db.refresh(new_tx)
    return new_tx


@router.get("/{portfolio_id}/holdings", response_model=List[HoldingResponse])
def get_portfolio_holdings(
    portfolio_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    
    portfolio = db.query(Portfolio).filter(Portfolio.id == portfolio_id, Portfolio.user_id == current_user.id).first()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found or unauthorized.")
        
    return db.query(Holding).filter(Holding.portfolio_id == portfolio_id).all()