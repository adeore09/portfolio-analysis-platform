from logging.config import fileConfig
from sqlalchemy import create_engine
from alembic import context

# 1. Pull in your dynamic Pydantic settings module & central database models
from app.utils.config import settings
from app.database.database import Base
from app.models import User, Portfolio, Holding, Transaction # Forces models to register

# This is the Alembic Config object
config = context.config

# Interpret the config file for Python logging
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# 2. Point target_metadata directly to your unified model registry
target_metadata = Base.metadata


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    # Bypasses alembic.ini and injects your actual .env string directly
    url = settings.DATABASE_URL
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    # 3. Explicitly connect using your live settings object URL string
    connectable = create_engine(settings.DATABASE_URL)

    with connectable.connect() as connection:
        context.configure(
            connection=connection, 
            target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()