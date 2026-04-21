import React, { useState } from 'react'

const TwoWayBinding = () => {
  const [name, setname] = useState(" ")
  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      console.log("submitted By",name)

      setname(' ')
    }}>
    <label htmlFor='name'>Name: </label>
    <input
     type="text"
     placeholder='Enter the name'
     id="name"
     value={name}
     onChange={(e)=> {setname(e.target.value)}}
     >
     </input>
        <button className='bg-amber-100 p-2 rounded-2xl'>Submit</button>
        </form>
    </>
  )
}

export default TwoWayBinding