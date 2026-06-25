from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user import User
from app.schemas.auth import UserRegister, UserResponse , TokenResponse
from app.utils.security import hash_password

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


from fastapi.security import OAuth2PasswordRequestForm
from app.utils.security import verify_password, create_access_token

@router.post("/login", response_model = TokenResponse)
def login_user(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(User.username == form_data.username).first()
    
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail= "Authentication failed. Invalid Username or Password",
            headers={"WWW - Authentication" : "Bearer"}
        )
    
    token_payload = {"sub": str(user.id)}
    access_token = create_access_token(data=token_payload)
    
    return{
        "access_token":access_token,
        "token_type": "bearer"
    }