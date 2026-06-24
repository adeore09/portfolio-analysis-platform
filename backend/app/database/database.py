from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from app.utils.config import settings

# production configuration connection pooling anchors
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,  # Discards stale connections automatically
    pool_size=15,        # Keeps 15 baseline concurrent lanes active
    max_overflow=25      # Handles sudden analytic computation bursts
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Request context dependency worker
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()