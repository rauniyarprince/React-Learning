import React from 'react'
import axios from 'axios'

const Fetchpost = () => {
// using .then to handle promises (older way)
  // function postdata() {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: "prince",
  //       age: 20
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log("Response Data:", data)
  //   })
  //   .catch(err => {
  //     console.log("Error:", err)
  //   })
  // }

  // -----------------------------------------
  
// axios is modern ans easy way 

async function postdata(){
  try{
const axiosex = await axios.post("https://jsonplaceholder.typicode.com/posts",{

name:"ananya rauniyar",
course: "BCA",
tech : "MERN"
})

console.log(axiosex.data)
  }
  catch(err){
    console.log(err);
    
  }
}
  return (
    <div style={{padding: "20px"}}>
      <h2>Fetch POST Example</h2>
      <button onClick={postdata}>Send Data</button>
    </div>
  )
}
export default Fetchpost