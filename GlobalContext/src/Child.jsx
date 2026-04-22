import React, { useContext } from 'react'
import Context from './Context'

const Child = () => {


  const data = useContext(Context)
  return (
<>

<H1>{data}</H1>
    </>
  )
}

export default Child