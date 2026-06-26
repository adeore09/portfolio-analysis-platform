from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class PortfolioBase(BaseModel):
    name: str
    description: Optional[str] = None
    currency: str = "USD"

class PortfolioCreate(PortfolioBase):
    pass

class PortfolioUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    currency: Optional[str] = None

class PortfolioResponse(PortfolioBase):
    id: int
    user_id: int
    created_at: datetime

    model_config = {"from_attributes": True}