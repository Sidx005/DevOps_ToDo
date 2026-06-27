import React, { useEffect, useState } from "react";
import {
  Plus,
  Search,
  CheckCircle2,
  Circle,
  Trash2,
} from "lucide-react";

const API = "http://localhost:8000";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");

  //////////////////////////////////////////////////////
  // GET TODOS
  //////////////////////////////////////////////////////
  const fetchTodos = async () => {
    try {
      const response = await fetch(`${API}/todos`);
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);


  const addTodo = async () => {
    if (!task.trim()) return;

    try {
      const response = await fetch(`${API}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: task,
          description: "",
          status: "Pending",
        }),
      });

      const data = await response.json();

      setTodos([...todos, data]);
      setTask("");
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTodo = async (todo) => {
    const updatedStatus =
      todo.status === "Completed"
        ? "Pending"
        : "Completed";

    try {
      const response = await fetch(
        `${API}/todos/${todo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status: updatedStatus,
          }),
        }
      );

      const updated =
        await response.json();

      setTodos(
        todos.map((t) =>
          t.id === todo.id
            ? updated
            : t
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  //////////////////////////////////////////////////////
  // DELETE
  //////////////////////////////////////////////////////
  const removeTodo = async (id) => {
    try {
      await fetch(
        `${API}/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      setTodos(
        todos.filter(
          (t) => t.id !== id
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTodos =
    todos.filter((todo) =>
      todo.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="h-screen bg-[url('wallpaper.jpg')] bg-no-repeat bg-cover flex items-center justify-center p-8">

      <div className="w-[1000px] h-[650px] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/60 border border-white/50">

        {/* titlebar */}
        <div className="h-12 bg-white/40 backdrop-blur-xl border-b flex items-center px-5 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"/>
          <div className="w-3 h-3 rounded-full bg-yellow-500"/>
          <div className="w-3 h-3 rounded-full bg-green-500"/>
        </div>

        <div className="flex h-[calc(100%-48px)]">

          {/* sidebar */}
          <div className="w-72 bg-white/30 border-r p-6">

            <h1 className="text-2xl font-semibold mb-8">
              Reminders
            </h1>

            <div className="space-y-3">

              <div className="bg-white/60 p-4 rounded-xl">
                <p className="text-sm text-gray-500">
                  Total Tasks
                </p>

                <h2 className="text-3xl font-bold">
                  {todos.length}
                </h2>
              </div>

              <div className="bg-white/60 p-4 rounded-xl">
                <p className="text-sm text-gray-500">
                  Completed
                </p>

                <h2 className="text-3xl font-bold">
                  {
                    todos.filter(
                      (t) =>
                        t.status ===
                        "Completed"
                    ).length
                  }
                </h2>
              </div>

            </div>
          </div>

          {/* content */}
          <div className="flex-1 p-8">

            {/* search */}
            <div className="flex items-center gap-3 bg-white/70 rounded-2xl px-4 py-3">

              <Search size={18}/>

              <input
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search reminders..."
                className="bg-transparent outline-none flex-1"
              />
            </div>

            {/* add */}
            <div className="flex gap-3 mt-6">

              <input
                value={task}
                onChange={(e) =>
                  setTask(
                    e.target.value
                  )
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  addTodo()
                }
                placeholder="Add a new task..."
                className="flex-1 bg-white/70 rounded-2xl px-5 py-4"
              />

              <button
                onClick={addTodo}
                className="bg-black text-white rounded-2xl px-6 flex items-center gap-2"
              >
                <Plus size={18}/>
                Add
              </button>

            </div>

            {/* todos */}
            <div className="mt-8 space-y-3">

              {filteredTodos.map(
                (todo) => (
                  <div
                    key={todo.id}
                    className="bg-white/70 rounded-2xl p-5 flex items-center justify-between"
                  >

                    <div
                      className="flex items-center gap-4 cursor-pointer"
                      onClick={() =>
                        toggleTodo(todo)
                      }
                    >
                      {todo.status ===
                      "Completed" ? (
                        <CheckCircle2 className="text-green-500"/>
                      ) : (
                        <Circle className="text-gray-400"/>
                      )}

                      <div>
                        <div
                          className={
                            todo.status ===
                            "Completed"
                              ? "line-through text-gray-400"
                              : ""
                          }
                        >
                          {todo.title}
                        </div>

                        <div className="text-xs text-gray-500">
                          {
                            todo.description
                          }
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        removeTodo(
                          todo.id
                        )
                      }
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={18}/>
                    </button>

                  </div>
                )
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}