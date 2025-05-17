from fastapi import APIRouter, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from core.clerk import validate_clerk_token

router = APIRouter()

security = HTTPBearer()

@router.get("/public")
async def public():
    return {"message": "This is a public endpoint!"}

@router.get("/private")
async def private(credentials: HTTPAuthorizationCredentials = Depends(security)):
    payload = validate_clerk_token(credentials.credentials)
    return {"message": "This is a private endpoint!", "user": payload}
