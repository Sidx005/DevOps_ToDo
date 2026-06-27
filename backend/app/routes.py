from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database import get_db
from app import schemas
from app import crud

router = APIRouter()


@router.post(
    "/todos",
    response_model=schemas.TodoResponse
)
def create(
    todo: schemas.TodoCreate,
    db: Session = Depends(get_db)
):

    return crud.create_todo(
        db,
        todo
    )


@router.get(
    "/todos",
    response_model=list[
        schemas.TodoResponse
    ]
)
def get_all(
    db: Session = Depends(get_db)
):

    return crud.get_todos(db)


@router.get(
    "/todos/{todo_id}",
    response_model=schemas.TodoResponse
)
def get_one(
    todo_id: int,
    db: Session = Depends(get_db)
):

    todo = crud.get_todo(
        db,
        todo_id
    )

    if not todo:
        raise HTTPException(
            404,
            "Todo not found"
        )

    return todo


@router.put(
    "/todos/{todo_id}",
    response_model=schemas.TodoResponse
)
def update(
    todo_id: int,
    todo: schemas.TodoUpdate,
    db: Session = Depends(get_db)
):

    updated = crud.update_todo(
        db,
        todo_id,
        todo
    )

    if not updated:
        raise HTTPException(
            404,
            "Todo not found"
        )

    return updated


@router.delete(
    "/todos/{todo_id}"
)
def delete(
    todo_id: int,
    db: Session = Depends(get_db)
):

    deleted = crud.delete_todo(
        db,
        todo_id
    )

    if not deleted:
        raise HTTPException(
            404,
            "Todo not found"
        )

    return {
        "message":
        "Todo deleted"
    }