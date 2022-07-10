import { useState } from "react";
const App = () => {
//   const [logged, setLogged] = useState(localStorage.getItem('token'));
  const name = 'Joaquin';
  const sumar = ()=>{
    return 1+1
  };
  return(
    <>
    <h1>Hola!</h1>
    {sumar()}
    </>
  )
  }

export default App;
