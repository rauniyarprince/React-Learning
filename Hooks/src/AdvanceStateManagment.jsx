import React, { useState } from 'react'

const AdvanceStateManagment = () => {

  const [num,setnum] = useState({user:"prince" ,age: "20"})

  const [array,setarray] = useState([4,8,9,6])
  

  function func(){
  const newnum = {...num};
  //set newnum(prev => ({...prev,age:50}))
  newnum.user = "kartik"
  newnum.age = 50
  setnum(newnum)
  }

  function arry(){
    const newarray = [...array]

    newarray.push(523)
    setarray(newarray)
  }
  return (
    <>
    <h1>{num.user},{num.age}</h1><br/>
     <h1>{array}</h1>
    <button onClick={func}>click me</button>
    <button onClick={arry}>click me 2 </button>
    </>
  )
}

export default AdvanceStateManagment



/* batch update
set newnum(prev => (count + 1)
set newnum(prev => (count + 1)
set newnum(prev => (count + 1)
set newnum(prev => (count + 1)
// update with 3,9,12








*/