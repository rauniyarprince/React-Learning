import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Men from '../component/Men'

const Product = () => {
  return (

    <div>
     <h1>Product page</h1>
    <div className=' flex justify-center gap-3  '>
   
   <Link  className='text-2xl font-bold text-blue-500 active:scale-95  hover:text-blue-800'  to ="Men">Men</Link>
    <Link className='text-2xl font-bold text-blue-500 active:scale-95  hover:text-blue-800'   to ="Women">Women</Link>
     <Link className='text-2xl font-bold text-blue-500 active:scale-95  hover:text-blue-800'   to ="Kids">Kids</Link>
    </div>

      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
        </div>
    </div>
  )
}

export default Product