import React from 'react'

const Categories = ({img, type}) => {
  return (
    <div className='bg-no-repeat bg-cover w-[475px] h-[400] px-[120px] py-[200px]' style={{backgroundImage: `url(${img})`}}>
        <button className=' w-[250px] py-[24px] bg-[#fff] rounded-[30px] text-[20px] font-[500] text-[#274C5B]'>
        {type}
        </button>
    </div>
  )
}

export default Categories