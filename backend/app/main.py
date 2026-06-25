from fastapi import FastAPI , Depends
from app.utils.config import settings
from app.database.database import engine, Base, get_db
from app.models.user import User
from app.api import auth

Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])

@app.get("/")
def home(db = Depends(get_db)):
    return {
        "title" : settings.PROJECT_NAME,
        "api_prefix" : settings.API_V1_STR,
        "database_status" : "table_synced_successfully"
    }
