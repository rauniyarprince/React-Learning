import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useRef Example</h1>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter text"
        style={{ padding: "10px" }}
      />

      <br /><br />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};

export default InputFocus;