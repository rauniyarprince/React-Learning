import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <h3>Total Tasks: {todos.length}</h3>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              margin: "10px 0",
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            <span
              onClick={() => toggleTask(todo.id)}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTask(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default TodoApp;