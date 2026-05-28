
import { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>Dark Mode</h1>

      <button onClick={() => setDark(!dark)}>
        Change Theme
      </button>
    </div>
  );
}