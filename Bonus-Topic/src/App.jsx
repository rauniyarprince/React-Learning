import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'

function App() {
  const [Theme, setTheme] = useState('Light')

  return (
 <>
 <div>
  <h1>theme is {Theme}</h1>
    <Navbar theme = {Theme}/>

 </div>
 
 
 </>
  )
}

export default App
