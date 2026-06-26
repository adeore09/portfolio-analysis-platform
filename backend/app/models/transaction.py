from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.database.database import Base

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String, index=True, nullable=False)          # e.g., "AAPL", "BTC-USD"
    transaction_type = Column(String, nullable=False)            # "BUY" or "SELL"
    quantity = Column(Float, nullable=False)                     # Units traded
    price = Column(Float, nullable=False)                        # Execution price per unit
    fees = Column(Float, default=0.0, nullable=False)            # Brokerage/network fees
    executed_at = Column(DateTime(timezone=True), server_default=func.now())

    # Tied directly to the portfolio room it happened inside
    portfolio_id = Column(Integer, ForeignKey("portfolios.id", ondelete="CASCADE"), nullable=False)