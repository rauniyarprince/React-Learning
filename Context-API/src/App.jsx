import { useState } from 'react'
import './App.css'
import { Nav2 } from './Component/Nav2'
import Navbar from './Component/Navbar'

function App() {
  const [theme, settheme] = useState('light')

  return (
    <>
    <Navbar theme = { theme}/>
    </>
  )
}

export default App
