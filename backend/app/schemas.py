from pydantic import BaseModel
from datetime import datetime


class TodoCreate(BaseModel):

    title: str
    description: str = ""
    status: str = "Pending"


class TodoUpdate(BaseModel):

    title: str | None = None
    description: str | None = None
    status: str | None = None


class TodoResponse(BaseModel):

    id: int
    title: str
    description: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True