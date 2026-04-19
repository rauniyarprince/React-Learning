import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Button = () => {
  const navigate = useNavigate()

  return (

    <>
    <div className=' flex m-5 gap-5'>
  <button 
  onClick = {() => {navigate('/')}
  }
  className='bg-amber-300 rounded-2xl p-2 active:scale-95
  hover:bg-amber-500'>go to home</button>

  <button 
  onClick = {() => {navigate(-1)} // for back prev 
  }
  className='bg-amber-300 rounded-2xl p-2 active:scale-95
  hover:bg-amber-500'>back</button>
  </div>
</>
  
  )
}
export default Button