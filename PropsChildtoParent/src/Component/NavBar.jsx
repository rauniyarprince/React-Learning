import React from 'react'

const NavBar = (props) => {

  console.log(props)
  return (
    <>

    <p>{props.theme}</p> 
    <button onClick={() => props.settheme ('Dark')} >Change theme</button> {/* propsdrilling child to parent   , hm parent me hi setwali chij bana li aur child me jake function change kar diya  b*/}
    </>
  )
}

export default NavBar