import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav'>
      <h3>PrinceCodes</h3>
      <div>
      {/* <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a> */}

       {/* anchor tag not used because its reload the page when the page another exist , routes provide the link tag */}
      <Link to ='/'>Home</Link>
      <Link to ='/About'>About</Link>
      <Link to ='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar