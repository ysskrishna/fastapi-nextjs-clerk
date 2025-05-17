from fastapi import APIRouter, Depends
from core.clerk import get_clerk_payload

router = APIRouter()

@router.get("/public")
async def public():
    return {"message": "This is a public endpoint!"}

@router.get("/private")
async def private(clerk_payload=Depends(get_clerk_payload)):
    return {"message": "This is a private endpoint!", "clerk_payload": clerk_payload}
