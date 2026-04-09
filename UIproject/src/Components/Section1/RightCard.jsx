import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
      <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1670884442927-e647436e12ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww" alt="" />
    <RightCardContent/>
    </div>
  )
} 

export default RightCard