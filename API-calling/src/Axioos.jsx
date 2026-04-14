import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Axioos = () => {

  const [data, setData] = useState([])

const getdata = async () => {

const response = await axios.get("https://picsum.photos/v2/list")
setData(response.data)



}




  return (

    <>
   <button onClick={getdata}>Click me</button>
   <div>
{data.map(function(elem,idx){
  return   <h1>hello{elem.author} {idx}</h1>

})}


   </div>
   </>
  )
}

export default Axioos