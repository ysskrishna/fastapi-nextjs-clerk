from fastapi import APIRouter

router = APIRouter()

@router.get("/public")
async def public():
    return {"message": "This is a public endpoint!"}

@router.get("/private")
async def private():
    return {"message": "This is a private endpoint!"}
