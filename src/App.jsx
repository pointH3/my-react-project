import axios from "axios";
import { useState } from "react";
import LoginButton from "./components/LoginButton";
import Menu from './components/menu'
const App = () => {
  
  //  --HOOKS--
  //  const [valor, setValor] = useState(0);

  // const url = 'https://www.breakingbadapi.com/api/';

  const [logged, setLogged] = useState(false)
  // const login = ()=>{
  //   setLogged(!logged)
  // };
  
  return(
    <>
    <Menu logged={logged} />
    <p>{logged ? 'Welcome!' : 'U are not logged'}</p>
    <LoginButton logged={logged} setLogged={setLogged}/>
    </>
  )
  }

export default App;
