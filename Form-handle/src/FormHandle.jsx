import React from 'react'

const FormHandle = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-200">

      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login Form
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input 
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input 
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {/* Button */}
        <button 
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200 active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default FormHandle