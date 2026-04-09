import React from 'react'

const RightCardContent = (props) => {
  return (
      <div className='absolute  font-semibold top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-bold text-shadow-green-950'>{props.id}</h2>
      <div>
        <p className='text-xl leading-normal text-white shadow-xl'>{props.intro}</p>
      <div className='flex justify-between mt-8 '>
        <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
        <button className='text-white font-medium px-3  py-2 rounded-full' ><i className="ri-arrow-right-line"></i></button>
      </div>
</div>
</div>
  )
}

export default RightCardContent