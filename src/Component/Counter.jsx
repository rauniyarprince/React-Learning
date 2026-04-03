import { useState } from "react";

function Counter() {

  let [counter, setCounter] = useState(0);

  // Add function
  const addValue = () => {
    setCounter(counter + 1); 
    // React ko bol rahe ho: counter update karo
  };

  // Remove function
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Value : {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br />

      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default Counter;