import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <h1>hello nav</h1>
    <nav>
<Link to ='/'>Home</Link><br/>
<Link to ='/about'>About</Link><br/>
<Link to ='/contact'>Contact</Link>


    </nav>
    </>
  )
}

export default Nav