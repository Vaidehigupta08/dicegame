import React, { useState } from 'react'

function Numberselector({Selectnum,setSelectnum}) {
    const arr=[1,2,3,4,5,6];
    
  return (
    <><div className='flex flex-col items-end '>
    <div className='flex flex-wrap gap-6 mt-16 mr-16'>
      {arr.map((i)=>(
<div
          key={i}
          onClick={()=>setSelectnum(i)}
          className={`h-[60px] w-[60px]  border-black  border-2 grid place-items-center text-[24px] ${Selectnum===i ? "bg-black text-white":"bg-white text-black" }`}
        >
{i}
        </div>

      )
      
      )}
    </div>
    <p className='text-xl font-semibold mr-14 mt-5'>Select Number</p>
    </div>
    </>
  )
}

export default Numberselector
