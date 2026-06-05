import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
      }}
    >
      <h1>Background Color Changer</h1>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>

      <button onClick={() => setColor("yellow")}>
        Yellow
      </button>

      <button onClick={() => setColor("white")}>
        Reset
      </button>
    </div>
  );
}

export default ColorChanger;