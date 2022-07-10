import React from 'react'

const LoginButton = ({logged, setLogged}) => {
  return (
    <>
        <button onClick={setLogged}>{logged ? "Logout" : "Login"}</button>
    </>
  )
}

export default LoginButton