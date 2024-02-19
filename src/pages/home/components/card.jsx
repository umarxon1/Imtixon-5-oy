import React from 'react'
const Card = ({img, name,text,id}) => {
  return (
    <div className='bg-no-repeat bg-cover bg-center w-[682px] h-[367px] px-[55px] py-[100px] ' style={{backgroundImage: `url(${img})`}}>
        <p className={id == 1 ? "text-white font-yellowtail text-[36px]" : "text-[#7EB693] font-yellowtail text-[36px]"}>{text}</p>
       <h2 className={id == 1 ? "text-white  font-roboto font-[800] text-[40px] max-w-[277px]" : "text-[#274C5B] font-roboto font-[800] text-[40px] max-w-[257px]" }>{name}</h2>
    </div>
  )
}

export default Card