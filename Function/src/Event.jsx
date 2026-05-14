function App() {

  // Event function
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h1>JSX Event Example</h1>

      {/* onClick Event */}
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;