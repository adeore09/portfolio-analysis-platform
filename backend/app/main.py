from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.utils.config import settings
from app.database.database import engine, Base, get_db
from app.models import User
from app.api import auth
from app.api import portfolio, holding

# Initialize database schema tables configuration loop
Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.PROJECT_NAME)

# 10. CORS POLICIES ENGINE INTEGRATION
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Your React dev environment address
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(portfolio.router, prefix="/api/v1/portfolios", tags=["Portfolios"])
app.include_router(holding.router, prefix="/api/v1/portfolios", tags=["Holdings & Transactions"])

@app.get("/")
def home(db = Depends(get_db)):
    return {
        "title": settings.PROJECT_NAME, 
        "api_prefix": settings.API_V1_STR,
        "database_status": "synchronized_and_secured"
    }