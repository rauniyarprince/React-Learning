import React, { useState } from 'react'

const Axios3 = () => {
  const [data, setdata] = useState([]) // array de rhe ki hm map function use kar sake 


const getdata = async ()  => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data2 = await data.json()
  console.log(data2);
  console.log(data2.id);
  console.log(data2.title);
setdata(data2)
    }






  return (
    <>
   
    <button onClick={getdata}>Click me</button>
    {data.map((elem,idx)=>{ // map data ka array hota  har ek item ke upar chalata h to jisme do chize atumatically deta  h current item ,and its position

return <h1>{elem.title}{idx}</h1> 

    })}
    
    
    
    
    
    </>
  )
}

export default Axios3