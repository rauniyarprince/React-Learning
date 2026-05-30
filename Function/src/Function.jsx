import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Hello JSX 🚀
        </h1>
        <p className="mt-2 text-gray-600">
          This is a simple JSX component.
        </p>

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => alert("Button Clicked!")}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}