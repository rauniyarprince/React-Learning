import React, { useState } from 'react'
const AdvanceStateManagment = () => {
  // Object state: stores user and age
  const [num, setnum] = useState({ user: "prince", age: "20" })

  // Array state: stores list of numbers
  const [array, setarray] = useState([4, 8, 9, 6])
  // Object state update using immutability
  function func() {

    // Create a copy of state (do not mutate original state directly)
    const newnum = { ...num };

    // Update values in copied object
    newnum.user = "kartik"
    newnum.age = 50

    setnum(newnum)
  }

  function arry() {
    const newarray = [...array]
    newarray.push(5,2,3,82)
    // Set updated array as new state
    setarray(newarray)
  }
  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6'>
      <div className='bg-gray-800 p-6 rounded-xl shadow-lg text-center w-72'>
        <h1 className='text-xl font-bold mb-2'>User Info</h1>
        <p className='text-lg'>{num.user}, {num.age}</p>
      </div>
    
      <div className='bg-gray-800 p-6 rounded-xl shadow-lg text-center w-72'>
        <h1 className='text-xl font-bold mb-2'>Array Data</h1>
        <p className='text-sm break-words'>{array.join(", ")}</p>
      </div>

      {/* Action buttons */}
      <div className='flex gap-4'>
        <button 
          onClick={func}
          className='bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition'>
          Update Object
        </button>

        <button 
          onClick={arry}
          className='bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600 active:scale-95 transition'>
          Update Array
        </button>
      </div>
    </div> )}
export default AdvanceStateManagment