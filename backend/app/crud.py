from sqlalchemy.orm import Session

from app.models import Todo


def create_todo(
    db: Session,
    todo
):

    db_todo = Todo(
        title=todo.title,
        description=todo.description,
        status=todo.status
    )

    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)

    return db_todo


def get_todos(db: Session):

    return db.query(Todo).all()


def get_todo(
    db: Session,
    todo_id: int
):

    return (
        db.query(Todo)
        .filter(Todo.id == todo_id)
        .first()
    )


def update_todo(
    db: Session,
    todo_id: int,
    todo
):

    db_todo = get_todo(
        db,
        todo_id
    )

    if not db_todo:
        return None

    if todo.title is not None:
        db_todo.title = todo.title

    if todo.description is not None:
        db_todo.description = todo.description

    if todo.status is not None:
        db_todo.status = todo.status

    db.commit()
    db.refresh(db_todo)

    return db_todo


def delete_todo(
    db: Session,
    todo_id: int
):

    db_todo = get_todo(
        db,
        todo_id
    )

    if not db_todo:
        return False

    db.delete(db_todo)
    db.commit()

    return True