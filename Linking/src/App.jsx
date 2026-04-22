import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import { About } from './About'
import { Contact } from './Contact'
import Not from './Not'

function App() {
  
  return (
  <>
<Nav/>
<Routes>
<Route path = '/' element = {<Home/>}></Route>
<Route path = '/About' element = {<About/>}></Route>
<Route path = '/Contact' element = {<Contact/>}></Route>
<Route path = '*' element ={<Not/>}></Route>


</Routes>
  </>
  )
}

export default App
