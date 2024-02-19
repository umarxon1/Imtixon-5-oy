import React from 'react'

const Circle = ({number, type}) => {
  return (
    <div className='w-[150px] h-[150px] rounded-[50%] border-[4px] border-[#7EB693] flex flex-col items-center justify-center'>
        <h2 className='font-[800] text-[30px] text-[#274C5B]'>{number}</h2>
        <span className='font-[600] text-[12px] text-[#274C5B] font-openSans'>{type}</span>
    </div>
  )
}

export default Circle