import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
     <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
     
 <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      
      <h1 className="text-7xl font-bold text-gray-300">404</h1>
      
      <p className="text-2xl mt-4 font-semibold text-red-400">
        Oops! Page Not Found
      </p>
      
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>

    </div>

    </div>
  )
}

export default Notfound