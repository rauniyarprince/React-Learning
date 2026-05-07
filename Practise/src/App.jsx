import React from 'react'
import Greeting from './Greeting'
import Datapassing from './datapassing'

const App = () => {
  return (
    <>
    {/* <Greeting/> */}
    
    <Datapassing user = "prince"/>
    <Datapassing user2 = "Kartik"/>
    <Datapassing user3 = "Pranshu"/>
    </>
  )
}
export default App