import { useState } from 'react'
import './App.css'

function App() {  
  localStorage.removeItem('randomgenerate')
  localStorage.removeItem('text')
  localStorage.clear()
    

  // how to store the data 
  localStorage.setItem('user','prince')
  localStorage.setItem('random','generate the random')
    localStorage.setItem('react','reaxt is js lib')
      localStorage.setItem('text','how are you')

      // how to store multiple data at a time
// firstly you create array or object 

let user = {

name:"prince",
course:"BCA",
address:"GKP"

}
// now you pass the object in the local storage with converting in stringify

localStorage.setItem('users',JSON.stringify(user)) // data store in str so we can convert the data in str

// data is store in the form of string so when we get the data firstly you convert in the object otherwise return in the string



  const data = JSON.parse(localStorage.getItem('users'))
  console.log(data) // you get the data in the console
  console.log(data.address)
  console.log(data.course)

  return (
   <> 
   <h1>learn the local storage how to use</h1>
  

   </>
  )
}

export default App
