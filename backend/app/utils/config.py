import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "PortX Engine"
    API_V1_STR: str = "/api/v1"
    
    POSTGRES_SERVER: str="localhost"
    POSTGRES_USER: str="postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "portx"
    DATABASE_URL: str | None = None
    
    model_config = SettingsConfigDict(case_sensitive=True, env_file=".env")
    
    def __init__(self, **values):
        super().__init__(**values)
        if not self.DATABASE_URL:
            self.DATABASE_URL = f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_SERVER}:5432/{self.POSTGRES_DB}"

settings = Settings()