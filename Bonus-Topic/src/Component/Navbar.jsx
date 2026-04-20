import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <p>{props.theme}</p>
    <button>change theme</button>
    </div>
  )
}

export default Navbar