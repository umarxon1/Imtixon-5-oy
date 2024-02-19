import React from 'react'
import { Logo } from '../../assets/icons/logo'
import { links } from './data'
import { NavLink } from 'react-router-dom'
import SearchInput from '../../components/search-input'
import Cart from '../../components/cart'

export const Header = () => {
  return (
    <header>
    <div className='container max-w-[1420px] mx-auto px-[20px]  mt-[30px]'>
        <div className='justify-between flex items-center mb-[35px]'>
        <div className='flex items-center font-bold text-[28px] gap-[5px]'>
            <Logo/>
            <h1 className=' font-roboto text-[30px] text-[#274C5B] '>Organick</h1>
        </div>
        <nav>
            <ul className='flex gap-[20px]'>
               {
                links.map((item) => (
                    <li className='font-bold font-roboto text-[18px] text-[#274C5B]' key={item.path}>
                        <NavLink to={item.path}>
                            {item.name}
                        </NavLink>
                    </li>
                ))
               }
            </ul>
        </nav>
        <div className='flex items-center gap-[30px]'>
        <div >
            <SearchInput/>
        </div>
        <div>
            <Cart/>
        </div>
        </div>
        </div>
    </div>
</header>
  )
}
