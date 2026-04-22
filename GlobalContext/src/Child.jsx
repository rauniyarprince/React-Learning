import React, { useContext } from 'react'
import Context from './Context'

const Child = () => {
  const data = useContext(Context);

  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default Child