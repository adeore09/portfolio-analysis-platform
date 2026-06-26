from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.database.database import Base

class Holding(Base):
    __tablename__ = "holdings"

    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String, index=True, nullable=False)        # e.g., "AAPL", "BTC-USD"
    quantity = Column(Float, nullable=False)                   # Total units held
    average_price = Column(Float, nullable=False)              # Average purchase price
    exchange = Column(String, default="NASDAQ", nullable=False) # e.g., "NYSE", "NSE"
    sector = Column(String, nullable=True)                     # e.g., "Technology"
    purchase_date = Column(DateTime(timezone=True), server_default=func.now())

    portfolio_id = Column(Integer, ForeignKey("portfolios.id", ondelete="CASCADE"), nullable=False)