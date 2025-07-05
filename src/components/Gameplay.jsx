import React from 'react'

function Gameplay({toggle}) {
  return (
    <div>
      <div>
      <div className='flex'>
    <img className='w-[649px] h-[522px] ml-[129px] mt-[140px]'src='public\images\dice.png'></img>
    <div className='mt-[300px]  w-[550px] h-[188px] text-[80px] font-serif font-extrabold'>DICE GAME</div>
    
    </div>
    <div className='flex justify-end mr-60 mt-[-15rem]'>
  <button  onClick={toggle}
  className='w-[180px] h-[40px] border-1 bg-black text-white text-[12px] rounded-[7px] hover:bg-white hover:text-black  active:bg-black active:text-white ease-in'>
    Play Now
  </button>
</div>
    </div>
    </div>
  )
}

export default Gameplay
