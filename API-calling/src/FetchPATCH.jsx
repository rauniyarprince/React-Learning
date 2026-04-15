import React from 'react'
import axios from 'axios'

const FetchPATCH = () => {
// by using propmises
  // function Patchdata(){
  // fetch("https://jsonplaceholder.typicode.com/posts/1",{
  //   method:"PATCH",
  //   headers: {"Content-Type" : "application/json"},
  //   body: JSON.stringify({
  //     name: "kartik"
  //   })
  //    })
  //   .then(res => res.json())
  //   .then(data  => {console.log(data)
  //   .catch(err => console.log(err))
  // })
  // }


  // ---------------------------------------------

  async function Patchdata() {
    try{
    const data = await axios.patch("https://jsonplaceholder.typicode.com/posts/1",
      {name: "deepak"}
    )
    console.log(data)
  }
  catch(err){
    console.log(err)
  }
}



  return (
    <div style={{padding: "20px"}}>
      <h2>Fetch/Axios PATCH Example</h2>
      <button onClick={Patchdata}>Update Data</button>
    </div>
  )
}

export default FetchPATCH