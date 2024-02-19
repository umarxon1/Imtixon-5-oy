import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({img, type, title, oldPrice, price, icon, id }) => {
  return (
    <Link to={`/shop-single/${id}`}>
    <div className='w-[335px] h-[493px] px-[28px] border-t-[1px] bg-white shadow-lg shadow-white-500/50 rounded-[30px] relative'>
        <div  className='border-b-[2px] pb-[13px] mb-[6px]'>
            <span className='font-[600] text-[15px] text-[white] rounded-[30px] absolute top-[30px] py-[6px] px-[12px] bg-[#274C5B]'>{type}</span>
            <img className='w-[335px] h-[324px] mt-[70px]  object-contain' src={img} alt="image" />
            <span className='font-[600] text-[20px] text-[#274C5B] '>{title}</span>
        </div>
        <div className='flex items-center justify-between pb-[13px]'>
            <div className='flex items-center gap-[8px] '>
                <span className='text-[#B8B8B8] font-[600] text-[15px] font-openSans line-through'>{oldPrice}</span>
                <span className='text-[#274C5B] font-[700] text-[18px] font-openSans'>{price}</span>
            </div>
        <div className='flex'>
            <img src={icon} alt="icon" />
            <img src={icon} alt="icon" />
            <img src={icon} alt="icon" />
            <img src={icon} alt="icon" />
            <img src={icon} alt="icon" />
        </div>
        </div>
    </div>
    </Link>
  )
}

export default Products