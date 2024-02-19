import React from 'react'

const Foods = ({img, description, text, id}) => {
  return (
    <div className='flex items-center gap-[19px]'>
       <div>
        <img src={img} alt="image" />
       </div>
       <div>
            <h2 className='font-[800] text-[25px] text-[#274C5B] mb-[7px] max-w-[226px]'>{description}</h2>
           {id === 1 || id == 2 ? <p className='font-[400] text-[18px] text-[#525C60] max-w-[444px]'>{text}</p> : ""}
       </div>
    </div>
  )
}

export default Foods