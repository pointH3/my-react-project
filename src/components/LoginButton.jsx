import React from 'react'

const LoginButton = ({logged, setLogged}) => {
    const run = ()=>{
        setLogged(!logged)
    };
  return (
    <>
        <button onClick={run}>{logged ? "Logout" : "Login"}</button>
    </>
  )
}

export default LoginButton