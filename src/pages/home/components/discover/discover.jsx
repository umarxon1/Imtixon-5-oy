import React from 'react'
import Button from '../../../../components/button'
import { Arrow } from '../../../../assets/icons/arrow'

const Discover = ({ img, date, icon, name, title, text }) => {
  return (
    <div className='bg-no-repeat bg-cover bg-center w-[670px] h-[500px] rounded-[30px] relative' style={{backgroundImage:`url(${img})`}}>
        <div className='rounded-[50%] bg-white w-[60px] h-[60px]  flex items-center pl-[18px] mt-[37px] ml-[27px]'>
            <span className='font-[800] leading-[15px] text-[16px]  w-[10px]'>{date}</span>
        </div>
        <div className='bg-white shadow-lg shadow-white-500/50 w-[613px] pt-[46px] pb-[60px] px-[70px] rounded-[30px] absolute top-[230px] left-[30px]'>
            <div>
                <div className='flex gap-[8px] mb-[15px]'>
                    <img src={icon} alt="icon" />
                    <span className='font-[400] text-[18px] text-[#274C5B]'>{name}</span>
                </div>
                <h3 className='font-[800] text-[25px] text-[#274C5B]'>{title}</h3>
                <p className='font-[400] text-[18px] text-[#525C60]'>{text}</p>
                <Button  style={{backgroundColor:"#EFD372", color: "#274C5B", padding:"20px 40px", borderRadius: "15px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20, marginTop:"30px" }}>
                    Read More <Arrow/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Discover