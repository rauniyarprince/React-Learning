
import './App.css'

import React from 'react'

const App = () => {

const btnclicked = () => {
 console.log("button clicked")
}

// function onchange(elem){
//   console.log(elem.target.value)
// }
  return (

    <>
    <div>
      <h1>Function Explore</h1>
<button onClick={btnclicked}>Click Here</button>
<button onDoubleClick={() => console.log("double clicked")}>
  Click Here
</button>

 <button onMouseEnter={()=>{console.log("Mouse Entered")}}>Click ME</button>
    </div>

<input  onChange={(elem => {console.log(elem.target.value)})}
type= "text" placeholder ="Enter Name" />

<div className='box' onMouseMove={() => console.log("Nachio")}>

</div>


</>

  )
}

export default App
