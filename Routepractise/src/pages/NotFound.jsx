import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        
        <h1 className="text-6xl font-bold text-cyan-900">404</h1>

        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-800 transition"
        >
          Go Home
        </Link>

      </div>

    </div>
  )
}

export default NotFound