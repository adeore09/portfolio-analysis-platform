from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user import User
from app.schemas.auth import UserRegister, UserResponse, TokenResponse
from app.utils.security import hash_password, verify_password, create_access_token
from app.utils.config import settings
from app.api.deps import get_current_user

# Initialize our sub-router box specifically for authentication activities
router = APIRouter()

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register_user(user_in: UserRegister, db: Session = Depends(get_db)):
    
    existing_user = db.query(User).filter(
        (User.email == user_in.email) | (User.username == user_in.username)
    ).first()
    
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Account registration failed. Username or email is already occupied."
        )

    
    new_user = User(
        username=user_in.username,
        email=user_in.email,
        hashed_password=hash_password(user_in.password)  
    )

    # 3. Commit data transaction to the physical disk drive
    db.add(new_user)
    db.commit()
    db.refresh(new_user) # Pull back our auto-assigned database ID

    return new_user




@router.post("/login", response_model = TokenResponse)
def login_user(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = db.query(User).filter((User.username == form_data.username) | (User.email == form_data.username)).first()
    
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication failed. Invalid credentials.",
            headers={"WWW-Authenticate": "Bearer"}, 
        )
    
    token_payload = {
        "sub": str(user.id),
        "username": user.username,
        "email": user.email
        }
    access_token = create_access_token(data=token_payload)
    
    return{
        "access_token":access_token,
        "token_type": "bearer",
        "expires_in":settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60
    }
    
@router.get("/me", response_model=UserResponse)
def get_authenticated_user_profile(current_user: User = Depends(get_current_user)):
    return current_user