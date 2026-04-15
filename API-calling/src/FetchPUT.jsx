import React from 'react'
import axios from 'axios'

const FetchPUT = () => {
 
  // when you update the value give the id 
//   function updatedata() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {  
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: "prince",
//       course: "BCA",
//       ADD: "GKP"
//     })
//   })
 
//   .then(res => res.json())
//   .then(data => console.log(data))   
//   .catch(err => console.log("error:", err))
// }

// ----------------------------------------------

// using axios

async function updatedata(){
  try{
  const Data = await axios.put("https://jsonplaceholder.typicode.com/posts/1",{
     name: "prince",
     course: "BCA",
     ADD: "GKP"
  })
  console.log(Data.data)
}
catch(err){
  console.log(err)
}
}

  return (
    <>
 
 <div style={{padding: "20px"}}>
      <h2>Fetch/Axios PUT Example</h2>
      <button onClick={updatedata}>Update Data</button>
    </div>
    </>
   
  )
}

export default FetchPUT