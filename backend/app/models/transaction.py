from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.database.database import Base

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    transaction_type = Column(String, nullable=False) # "BUY" or "SELL"
    quantity = Column(Float, nullable=False)          # Number of shares/units
    price = Column(Float, nullable=False)             # Execution price per unit
    executed_at = Column(DateTime(timezone=True), server_default=func.now())

    portfolio_id = Column(Integer, ForeignKey("portfolios.id", ondelete="CASCADE"), nullable=False)
    asset_id = Column(Integer, ForeignKey("assets.id", ondelete="RESTRICT"), nullable=False)