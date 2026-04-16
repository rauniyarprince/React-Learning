import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  items-center justify-between py-7 px-10 bg-cyan-900'>
      <h2 >PrinceCodes</h2>
      <div className='flex gap-10'>
        <a className='text-lg font-medium ' href ='/'>Home</a>
        <a className='text-lg font-medium ' href ='/About'>About</a>
        <a className='text-lg font-medium ' href ='/Product'>Product</a>

      </div>





    </div>
  )
}

export default Navbar