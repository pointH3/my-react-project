import axios from "axios";
import { useState } from "react";
import Menu from './components/menu'
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
    <Menu/>
    <h3>{logged ? 'Welcome!' : 'U are not logged'}</h3>
    <button onClick={login}>{logged ? 'Logout' : 'Loggin'}</button>
    </>
  )
  }

export default App;
