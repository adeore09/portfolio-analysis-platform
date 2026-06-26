from sqlalchemy import Column, String, Float, DateTime
from datetime import datetime, timezone
from app.database.database import Base

class StockPriceCache(Base):
    __tablename__ = "stock_prices_cache"
    
    ticker = Column(String, primary_key=True, index=True)
    price = Column(Float, nullable=False)
    last_fetched_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)
    