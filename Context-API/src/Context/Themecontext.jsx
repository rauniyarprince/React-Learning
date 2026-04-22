import React, { createContext } from 'react'



export const  ThemeDataContext = createContext()// create context

const Themecontext = (props) => {


  return (
<ThemeDataContext.Provider value = "Prince">
  {props.children}
</ThemeDataContext.Provider>
  )
}

export default Themecontext