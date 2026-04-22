import React, { useContext } from 'react'
import Context from './Context'

const Global = () => {

  const data = useContext(Context)
  return (
    <>
<h1>run form global {data}</h1>
    
    
    </>
  )
}

export default Global