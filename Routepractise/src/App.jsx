import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/prduct'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Men from './component/Men'
import Women from './component/Women'
import Kids from './component/Kids'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'

function App() {

  return (
    <>
<Navbar/>
<Routes> {/* ye container h jo route ko contain karta h  ,ye decide karta h kaun path match karega ,Ek time pe sirf ek component render karega*/}
  <Route path='/' element ={<Home/>} ></Route>
  <Route path='/About' element={<About/>}></Route>
  <Route path ='/Product' element={<Product/>}>
    <Route path = "Men" element={<Men/>}></Route>
  <Route path='Women' element={<Women/>}></Route>
  <Route path='Kids' element={<Kids/>}></Route>
  </Route>  {/* nested routingg created */}

  <Route path ='/Contact' element={< Contact/>}></Route>
  <Route path ='/Courses/:id' element={< CoursesDetails/>}></Route> {/* dynamic routing created */}

  <Route path ='/Courses' element={< Courses/>}></Route>
  <Route path ='*' element={<NotFound/>}></Route>








</Routes>


<Footer/>
    
    </>
  )
}

export default App
