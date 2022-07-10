import React from 'react'



const Menu = ({logged}) => {
  console.log(logged)
  return (
    <>
    <h3>Welcome {logged ? "Joaquin!" : "Usuario No Registrado!"}</h3>
    </>
  )
}

export default Menu