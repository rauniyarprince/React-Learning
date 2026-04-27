import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const Pagination = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setindex] = useState(1)

  async function getdata() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserdata(response.data)
  }

  useEffect(function(){
    getdata()
  },[index])

  let printUserData = (
    <h3 className='text-gray-300 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
      Loading......
    </h3>
  )

  if(userdata.length > 0){
    printUserData = userdata.map(function(elem,idx){
      return (
        <div key={idx} className="group cursor-pointer"> 
          
          <a href={elem.url} target='_blank' rel="noreferrer">
            {/*hm uspar click karenge to uske image src par chale jayenge */}

            <div className='relative w-full h-40 bg-white rounded-xl overflow-hidden'>
              
              {/* Image */}
              <img 
                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110' 
                src={elem.download_url} 
                alt="" 
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center'>
                <span className='bg-white text-black px-3 py-1 text-sm rounded'>
                  View Image
                </span>
              </div>

            </div>

            {/* Author */}
            <h2 className='font-bold text-sm sm:text-base mt-1 group-hover:text-green-400 transition'>
              {elem.author}
            </h2>

          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black min-h-screen text-white flex flex-col'>

      {/* Navbar */}
      <nav className='bg-gray-900 px-6 py-4 flex justify-between items-center shadow-md'>
        <h1 className='text-xl sm:text-2xl font-bold text-green-400'>PrinceCodes</h1>
        <p className='text-xs sm:text-sm text-gray-300'>Image Gallery</p>
      </nav>

      {/* Main */}
      <div className='flex-grow p-4 overflow-auto'>

        <div className='relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {printUserData} 
        </div>

        {/* Pagination */}
        <div className='flex justify-center gap-4 sm:gap-6 items-center p-4 flex-wrap'>
          
          <button  
            style={{opacity:index == 1 ? 0.5 : 1 }}
            onClick={() => {
              if(index > 1){ 
                setindex(index -1)
                setUserdata([])
              }
            }}
            className='bg-amber-400 text-xs sm:text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>
            Prev
          </button>

          <h4 className='text-sm sm:text-base'>Page {index}</h4>

          <button 
            onClick={ () => {
              setindex(index + 1)
              setUserdata([])
            }}
            className='bg-amber-400 text-xs sm:text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>
            Next
          </button>

        </div>

      </div>

      {/* Footer */}
      <footer className='bg-gray-900 text-center py-3 text-xs sm:text-sm text-gray-400'>
        © 2026 PrinceCodes | All Rights Reserved
      </footer>

    </div>
  )
}

export default Pagination