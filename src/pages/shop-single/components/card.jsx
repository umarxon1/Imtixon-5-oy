import React from 'react'
import Button from '../../../components/button'
import { Arrow } from '../../../assets/icons/arrow'

const card = ({img, type, title, oldPrice, price, icon}) => {
  return (
    <div className='flex items-center justify-evenly'>
        <div className=' relative bg-white shadow-lg shadow-white-500/50 rounded-[30px] border-t-[1px] w-[600px] h-[563px] flex items-center justify-center'>
            <img className='w-[400px] object-contain' src={img} alt="image" />
            <span className='font-[600] text-[15px] text-[white] rounded-[30px] absolute top-[43px] left-[47px] py-[6px] px-[12px] bg-[#274C5B]'>{type}</span>
        </div>
        <div>
            <h2 className='font-[600] text-[40px] text-[#274C5B]'>{title}</h2>
            <div className='flex mb-[9px]'>
                <img src={icon} alt="icon" />
                <img src={icon} alt="icon" />
                <img src={icon} alt="icon" />
                <img src={icon} alt="icon" />
                <img src={icon} alt="icon" />
            </div>
            <div>
                <span className='text-[#B8B8B8] font-[600] text-[15px] font-openSans line-through mr-[5px]'>{oldPrice}</span>
                <span className='text-[#274C5B] font-[700] text-[18px] font-openSans'>{price}</span>
            </div>
            <p className='font-[400] text-[18px] font-openSans text-[#525C60] max-w-[650px] mt-[27px] mb-[35px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className='flex items-center gap-[20px]'>
                <span className='font-[700] text-[20px] text-[#274C5B] '>Quantity :</span>
                <div className='py-[29px] px-[61px] border-[#274C5B] border-[3px] w-[134px] rounded-[20px]'>
                    1
                </div>
                <Button style={{backgroundColor:"#274C5B", color: "white", padding:"28px 40px", borderRadius: "15px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20,}}>
                    Add To Cart <Arrow/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default card