import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-cyan-900 text-white px-6 md:px-10 py-4 md:py-5">
      
      <h2 className="text-xl font-semibold">PrinceCodes</h2>

      <div className="w-full h-[.1px] bg-gray-300 my-2 md:hidden"></div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-8 md:mt-0">
        <Link className="hover:text-gray-300" to="/">Home</Link>
        <Link className="hover:text-gray-300" to="/about">About</Link>
        <Link className="hover:text-gray-300" to="/product">Product</Link>
         <Link className="hover:text-gray-300" to="/courses">Courses</Link>
        <Link className="hover:text-gray-300" to="/contact">Contact</Link>
      </div>

    </div>
  )
}

export default Navbar