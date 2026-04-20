import { useState } from 'react'
import './App.css'
import NavBar from './Component/NavBar'

function App() {
const [theme, settheme] = useState('light')

  return (
   <>
   <h1>Theme is {theme}</h1>
   <NavBar theme={theme} settheme={settheme}/>
   
     </>
  )
}

export default App
