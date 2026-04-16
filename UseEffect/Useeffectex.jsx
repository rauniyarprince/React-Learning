import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Useeffectex = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)


// useEffect(function (){
//   console.log("useeffect is running"); // when you change the state than you see changing in the useeffect
  
// })

// passing the dependencies for running once

useEffect(function (){
  console.log("useeffect is running"); 
},[num]) // dependency bana di jab num ki state change hoga tb chalega



  return (
    <>
    <h1>Value a is 
      :{num}</h1>
         <h1>Value b is 
      :{num2}</h1>
    <button onDoubleClick={()=>setnum2(num2 + 10)} onClick={() => setnum(num + 1 )
    }>click</button>
     <button onMouseLeave={()=>setnum2(num2 + 10)} onMouseEnter={() => setnum(num + 1 )
    }>Hover</button>
   
    </>
  )
}

export default Useeffectex