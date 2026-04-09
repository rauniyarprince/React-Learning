import React from 'react'

const RightCardContent = () => {
  return (
      <div className='absolute  font-semibold top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-bold'>1</h2>
      <div>
        <p className='text-xl leading-normal text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam recusandae nihil ipsa veniam amet non earum cum nostrum voluptatum.</p>
      <div className='flex justify-between mt-8 '>
        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
        <button className='bg-blue-600 text-white font-medium px-3  py-2 rounded-full' ><i className="ri-arrow-right-line"></i></button>
      </div>
</div>
</div>
  )
}

export default RightCardContent