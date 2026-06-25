import os

class Settings:
    
    PROJECT_NAME: str= "PortX API Engine"
    API_V1_STR: str= "/api/v1"
    
    POSTGRES_USER: str=os.getenv("POSTGRES_USER", "postgres")
    POSTGRES_PASSWORD: str=os.getenv("POSTGRES_PASSWORD", "postgres")
    POSTGRES_SERVER: str = os.getenv("POSTGRES_SERVER", "localhost")
    POSTGRES_PORT: str = os.getenv("POSTGRES_PORT", "5432")
    POSTGRES_DB: str = os.getenv("POSTGRES_DB", "portx_dev")
    
    SECRET_KEY: str = os.getenv("SECRET_KEY", "SUPER_SECRET_PORTX_CRYPTO_KEY_DO_NOT_LEAK_98234")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    
    @property
    def DATABASE_URL(self) -> str:
        return f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_SERVER}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}"
    
settings = Settings()