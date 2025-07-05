import React, { useState } from 'react';

function Diceroll({ Currentdice, rolldice, reset }) {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <div className='flex flex-col items-center justify-center mt-12'>
        <div className='w-[250px] h-[310px] text-center' onClick={rolldice}>
          <img
            className='w-[250px] h-[250px]'
            src={`/images/dice${Currentdice}.png`}
            alt='dice'
          />
          <p className='text-[25px] font-semibold mt-5'>Click On Dice To Roll</p>
        </div>

        <button
          onClick={reset}
          className='w-[220px] h-[44px] mt-8 bg-white text-black border-[3px] border-black rounded-md font-semibold hover:bg-black hover:text-white transition duration-300'
        >
          Reset Game
        </button>

        <button
          onClick={() => setShowRules(!showRules)}
          className='w-[220px] h-[44px] mt-4 bg-white text-black border border-black rounded-md font-semibold hover:bg-black hover:text-white transition duration-300'
        >
          {showRules ? 'Hide Rules' : 'Show Rules'}
        </button>

        {showRules && (
          <div className='mt-6 p-4 border border-gray-400 rounded-lg bg-gray-50 text-black w-full max-w-md mx-auto text-sm leading-relaxed'>
            <h2 className='text-lg font-bold mb-2'>📜 Game Rules:</h2>
            <ul className='list-disc pl-5 space-y-1'>
              <li>Select a number between 1 to 6</li>
              <li>Click dice to roll</li>
              <li>If selected number matches dice → score increases</li>
              <li>If not matched → score decreases</li>
              <li>Score can’t go below 0</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Diceroll;
