import React, { useState } from 'react'
import Gameplay from './components/Gameplay'
import Startedgame from './components/Startedgame';

function App() {
const[Isstarted, setIsstarted]=useState(false);
const togglegame=()=>{
setIsstarted((prev)=>!prev);
}



  return (
   <>
   {Isstarted ? <Gameplay 
   toggle={togglegame}
   />:<Startedgame/>};
   
   </>
  )
}

export default App
