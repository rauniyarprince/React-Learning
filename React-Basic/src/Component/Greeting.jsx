import React, { useState } from 'react';

function Greeting() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello, welcome! 👋');
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Greeting;