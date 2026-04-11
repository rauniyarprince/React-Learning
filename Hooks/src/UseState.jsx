import React from 'react'
import { useState } from 'react'

const UseState = () => {
  const [count, setcount] = useState(0)
    function name () {
    
      setcount(count + 1)
      
    }
  return (

    <>
  
    <h1>value is of count : {count}</h1>
    <button onClick={name}>click me</button>
    </>
  )
}

export default UseState