import React from 'react'
import { Korzina } from '../assets/icons/korzina'

const Cart = () => {
  return (
    <div className='flex items-center gap-[10px] border-[2px] rounded-[30px] p-[5px] pr-[20px]'>
        <Korzina/>
        <span className='font-medium text-[18px] font-roboto'>Cart 0</span>
    </div>
  )
}

export default Cart