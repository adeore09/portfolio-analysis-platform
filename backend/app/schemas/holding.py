from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class HoldingBase(BaseModel):
    ticker: str
    quantity: float
    average_price: float
    exchange: str = "NASDAQ"
    sector: Optional[str] = None
    
class HoldingResponse(HoldingBase):
    id: int
    portfolio_id: int
    purchase_date: datetime
    
    model_config = {"from_attributes":True}
    
class TransactionCreate(BaseModel):
    ticker: str
    transaction_type: str
    quantity: float
    price: float
    fees: float = 0.0
    
class TransactionResponse(TransactionCreate):
    id: int
    portfolio_id: int
    executed_at: datetime
    
    model_config = {"from_attributes":True}