import yfinance as yf
from datetime import datetime, timezone, timedelta
from sqlalchemy.orm import Session
from app.models.stock_cache import StockPriceCache

CACHE_EXPIRE_MINUTES = 15

def get_live_stock_prices(ticker: str, db: Session) -> float:
    ticker_upper = ticker.upper()
    now = datetime.now(timezone.utc)
    
    cached_item = db.query(StockPriceCache).filter(StockPriceCache.ticker == ticker_upper).first()
    
    if cached_item:
        cache_time = cached_item.last_fetched_at.replace(tzinfo=timezone.utc) if cached_item.last_fetched_at.tzinfo is None else cached_item.last_fetched_at
        
        if now - cache_time < timedelta(minutes=CACHE_EXPIRE_MINUTES):
            return cached_item.price
        
    try:
        stock_ticker = yf.Ticker(ticker_upper)
        live_price = stock_ticker.fast_info.last_price
        
        if live_price is None or live_price <= 0:
            history =  stock_ticker.history(period="1d")
            if not history.empty:
                live_price = float(history['Close'].iloc[-1])
            else:
                raise ValueError(f"Could not find live price or historical data for ticker: {ticker_upper}")
    
    except Exception as e:
        if cached_item:
            return cached_item.price
        raise ValueError(f"Market data provider error for ticker {ticker_upper}: {str(e)}")
    
    
    if cached_item:
        cached_item.price = live_price
        cached_item.last_fetched_at = now
    else:
        new_cache = StockPriceCache(
            ticker= ticker_upper,
            price = live_price,
            last_fetched_at =now
        )
        db.add(new_cache)
    
    db.commit()
    return live_price