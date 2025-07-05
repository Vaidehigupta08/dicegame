import React from 'react'
import Numberselector from './Numberselector'
import Diceroll from './Diceroll'
import { useState } from 'react';
function Startedgame() {
  const [Currentdice,SetCureentdice]=useState(1);
  const [Selectnum,setSelectnum]=useState("");
  const [score,setScore]=useState(0);
  
  const randomnumgenerator=()=>{
    const min=1;
    const max=6;
return (Math.floor(Math.random() * (max - min + 1)) + min);
}
const rolldice=()=>{
const newdice=randomnumgenerator();
SetCureentdice(newdice);
if(!Selectnum){
  alert("first select a number");
  return;
}
if(newdice===Selectnum){
  setScore((prev)=>prev+newdice);

}
else{
  setScore((prev)=>Math.max(0,prev-newdice));
}
setSelectnum("");
}
const reset =()=>{
SetCureentdice(1);
setSelectnum("");
setScore(0);
 }

  return (<>
  <div className='flex justify-between'>
    <div className='w-[135px] h-[151px]  gap-0.5 ml-24 '>
    <h1 className='text-[100px] h-[122px] w-[62px] pl-6 font-mono'>{score}</h1>
    <p className='w-[135px] h-[36px] text-[24px] font-bold'> Total Score</p>

    </div>
    <Numberselector
    Selectnum={Selectnum}
    setSelectnum={setSelectnum}
    />
    </div>
   
    <Diceroll
    Currentdice= {Currentdice}
    rolldice={rolldice}
    reset={reset}/>

    
    </>
  )
}

export default Startedgame
