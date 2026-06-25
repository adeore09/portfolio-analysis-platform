from sqlalchemy import Column, Integer, String
from app.database.database import Base

class Asset(Base):
    __tablename__ = "assets"

    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String, unique=True, index=True, nullable=False) # e.g., "AAPL", "BTC"
    name = Column(String, nullable=False)                            # e.g., "Apple Inc."
    asset_type = Column(String, nullable=False)                      # e.g., "Equity", "Crypto"