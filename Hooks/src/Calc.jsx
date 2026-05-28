
import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="First Number"
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Second Number"
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={addNumbers}>Add</button>

      <h2>Result: {result}</h2>
    </div>
  );
}