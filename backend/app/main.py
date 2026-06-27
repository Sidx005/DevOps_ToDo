from fastapi import FastAPI

from app.database import Base
from app.database import engine

from app.routes import router

from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(
    bind=engine
)

app = FastAPI(
    title="Todo API"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def home():

    return {
        "message":
        "Todo API Running"
    }