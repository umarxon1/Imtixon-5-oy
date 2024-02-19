import React from 'react'

const Policy = ({img, title, text}) => {
  return (
    <div className='bg-white px-[36px] pt-[50px] pb-[19px] rounded-[30px]'>
        <div className='text-center'>
            <img className='ml-[50px] mb-[15px]' src={img} alt="icon" />
            <h5 className='font-[800] text-[22px] text-[#274C5B] mb-[12px]'>{title}</h5>
            <p className='font-[400] text-[18px] max-w-[184px] text-[#525C60]'>{text}</p>
        </div>
    </div>
  )
}

export default Policy