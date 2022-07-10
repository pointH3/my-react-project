import axios from "axios";
import { useState } from "react";
const App = () => {
  
  //  --HOOKS--
  //  const [valor, setValor] = useState(0);

  // const url = 'https://www.breakingbadapi.com/api/';

  const [logged, setlogged] = useState(false)
  const login = ()=>{
    setlogged(!logged);
  };
  
  return(
    <>
    <h3>{logged ? 'hi!' : ''}</h3>
    <p>{logged ? 'Welcome!' : '???'}</p>
    <button onClick={login}>Login / Logout</button>
    </>
  )
  }

export default App;
