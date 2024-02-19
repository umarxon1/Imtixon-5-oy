import React from 'react'
import { Instagram2 } from '../../assets/icons/instagram2'
import { Facebook2 } from '../../assets/icons/facebook2'
import { Twitter2 } from '../../assets/icons/twitter2'


const Team = ({img, name, job}) => {
  return (
    <div className='w-[419px]  bg-[#F9F8F8] rounded-[30px] hover:bg-white hover:shadow-lg hover:shadow-white-500/50 '>
        <img className="w-[419px] h-[465px]" src={img} alt="image" />
        <div className='px-[28px] py-[35px] flex items-end justify-between'>
        <div>
        <h5 className='font-[800] text-[25px] text-[#274C5B]'>{name}</h5>
        <span className='font-yellowtail  text-[#7EB693] font-[400] text-[22px]'>{job}</span>
        </div>
        <div className='flex items gap-[17px]'>
           <Instagram2/>
           <Facebook2/>
           <Twitter2/>
        </div>
        </div>
    </div>
  )
}

export default Team