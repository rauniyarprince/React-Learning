import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(prev => prev + 1);
  };

  const removeValue = () => {
    setCounter(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      
      {/* Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80 h-30">
        
        <h1 className="text-2xl font-bold mb-4">
          Counter App
        </h1>

        <p className="text-lg mb-6">
          Value : <span className="font-semibold">{counter}</span>
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={addValue}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition h-10 w-20"
          >
            + Add
          </button>

          <button
            onClick={removeValue}
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition h-10 w-20"
          >
            - Remove
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;