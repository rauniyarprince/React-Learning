
import './App.css'
import { useState } from 'react';

function App() {
  const [count,setcount] = useState(0);

  return (
    <>
    <div className='container'>
      <div className='heading'>
    <h1>Value is:{count} </h1>
    </div>
    <div className='btn'>
    <button onClick={function()
      {
        return setcount(count + 1)
      }}>Increase</button>
      <button onClick={()=>setcount(count + 1)}>Decrease</button>
      </div>
      </div>
    </>
  )
}

export default App
