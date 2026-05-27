import React from 'react'
import { useState } from 'react'

const UseState = () => {

  // State to store count value
  const [count, setcount] = useState(0)
  const [username, setusername] = useState("XYZ")
  const [age, setage] = useState("XYZ")

  // State to store array
  const [array, setarray] = useState([])

  function name () {    // Update count (re-render trigger)
    setcount(count + 1)
    setage(20)
    setusername("prince")
    setarray([5,8,9,6,9])
  }

  return (
    <div className='min-h-screen bg-gray-900 flex items-center justify-center text-white'>

      <div className='bg-gray-800 p-8 rounded-xl shadow-lg w-80 text-center'>
        <h1 className='text-lg font-semibold leading-7'>
          button is clicked : {count} <br/>
          My name is {username} <br/>
          My age is {age} <br/>
          Array return: {array.join(", ")}
        </h1>

        <button 
          onClick={name} 
          className='mt-5 bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition'>
          Click Me
        </button>

      </div>

    </div>
  )
}

export default UseState

