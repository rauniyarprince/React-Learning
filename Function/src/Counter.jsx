import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
    setName("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>JSX Example</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name ? name : "Guest"}!</h2>

      <h3>Counter: {count}</h3>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      {count >= 10 ? (
        <p>You reached 10!</p>
      ) : (
        <p>Keep Clicking...</p>
      )}
    </div>
  );
}

export default App;