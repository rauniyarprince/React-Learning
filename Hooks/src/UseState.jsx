import React from 'react'
import { useState } from 'react'

const UseState = () => {
  const [count, setcount] = useState(0)
  const [username, setusername] = useState("XYZ")
   const [age, setage] = useState("XYZ")
      const [array, setarray] = useState([])
    function name () {
      setcount(count + 1)
      setage(20)
      setusername("prince")
      setarray([5,8,9,6,9])
    }
  return (
    <>
    <h1>button is clicked : {count}<br/>
    My name is {username}<br/>
    My age is {age}<br/>
    Array retutn {array}
    </h1>
    <button onClick={name}>click me</button>

    </>
  )
}
export default UseState