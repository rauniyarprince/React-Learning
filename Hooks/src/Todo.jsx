import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, task]);
    setTask("");
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}