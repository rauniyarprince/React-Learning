import React from 'react'

const FormHandle = () => {


  function event() {
    console.log ("submitted")
    
  }
  return (
    <>

  <div className='m-10 bg-amber-200 w-2/4 h-60 '>
    <form>
      <p className=' ml-20 font-bold mb-5'>Form</p>
    <label>Email:</label>
    <input className='bg-amber-100 border-2 '   type ="text" name= "name" placeholder='Enter your email'/>
    <label>Password:</label>
    <input className='bg-amber-100 border-2 '   type ="text" name= "password" placeholder='Enter your password'/>
   <button className='m-10 ml-20 bg-red-600 rounded-2xl p-1 border-1' onClick={event}>Submit</button>
    </form>
  </div>
    </>
  )
}

export default FormHandle