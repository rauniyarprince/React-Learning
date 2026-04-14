import React from 'react'

const FetchAPI = () => {


  // by fetch api(achive by promises)
function getData(){
 fetch("https://jsonplaceholder.typicode.com/todos/1")
 .then(res => res.json())
 .then(data => console.log(data))
}
  


// achive by async await
async function getdata1(){
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const  conv = await data.json() // jo data convert kar rhe h wo bhi async hi h to use bhi hme await karna padega
console.log(conv);

}
  return (
<>

<button onClick={getdata1}>Click me</button>

</>
  )
}

export default FetchAPI