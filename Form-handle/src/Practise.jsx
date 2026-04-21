import React, { useState } from 'react'

const Practise = () => {
  const [name, setname] = useState(" ")

  function submithandle(e) {
    e.preventDefault()
    console.log("submited by", name)
    setname(" ")
  }
  return (
    <>
      <form onSubmit={submithandle}>
        <label>Name: </label>
        <input className="bg-amber-200" type="text" placeholder='Enter the name'
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input><br />
        <button>submit</button>
      </form>

    </>
  )
}

export default Practise