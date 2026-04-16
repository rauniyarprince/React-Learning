import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Notfound from './Pages/Notfound'

function App() {

  return (
  <>
  <div className='h-screen bg-black text-white'>
  
 <Navbar/>

<Routes>
  <Route path = '/' element ={<Home/>} />
  <Route path = '/About' element ={<About/>} />
  <Route path = '/Product' element ={<Product/>} />
  <Route path = '*' element={<Notfound/>} />
  
</Routes>
 <Footer/>
 </div>

 </>
  )
}

export default App
