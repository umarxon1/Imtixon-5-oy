import React from 'react'

const Type = ({img, title}) => {
  return (
    <div className='flex flex-col items-center'>
        <div className="bg-white rounded-[30px]">
        <img src={img} alt="image" />
        </div>
        <h5 className='font-[500] text-[22px] text-[white] mt-[24px]'>{title}</h5>
    </div>
  )
}

export default Type