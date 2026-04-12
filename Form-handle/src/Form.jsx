import React from 'react'

const Form = () => {

  function submithandler(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        
        <div className='bg-white p-10 rounded-2xl shadow-lg w-[400px]'>

          <p className='text-center font-bold mb-6 text-2xl'>Login</p>

          <form onSubmit={submithandler} className="flex flex-col gap-4">

            <div>
              <label className="block mb-1">Name</label>
              <input 
                type='text' 
                placeholder='Enter your name'
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input 
                type='text' 
                placeholder='Enter your email'
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <input 
                type='password' 
                placeholder='Enter your password'
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button 
              type="submit"
              className='bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 mt-2 transition'
            >
              Submit
            </button>

          </form>

        </div>
      </div>
    </>
  )
}

export default Form