import React from 'react'
import axios from "axios"

const FetchDelete = () => {

// function deleteData() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE"
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log("Deleted:", data)
//   })
//   .catch(err => console.log("Error:", err))
// }

//--------------------------------------------



async function deleteData() {
  try {
    const res = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")

    console.log("Deleted:", res.data)
  } catch (err) {
    console.log("Error:", err)
  }
}



  return (
    <>
     <div style={{padding: "20px"}}>
      <h2>Fetch/Axios Delete Example</h2>
      <button onClick={deleteData}>Delete Data</button>
    </div>
    </>
  )
}

export default FetchDelete