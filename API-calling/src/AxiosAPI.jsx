import React from 'react'
import axios from 'axios'

const AxiosAPI = () => {

async function getdata(){
 const response = await  axios.get('https://jsonplaceholder.typicode.com/todos/')
console.log(response.data);


// with distruct
// async function getdata(){
//  const response = await  axios.get('https://jsonplaceholder.typicode.com/todos/')
// console.log(response.data);



}

  return (
    <>
    
    <button onClick={getdata}>Click me</button>
    
    
    </>
  )
}

export default AxiosAPI