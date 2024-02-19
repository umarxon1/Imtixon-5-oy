import React from 'react'
import { Search } from '../assets/icons/search'

const SearchInput = () => {
  return (
    <div className='flex  grow items-center px-[5px] rounded-[50px] border-[1px]'>
    <input type="text" className='w-[310px] h-[53px] indent-[20px]  rounded-[50px] focus:outline-none '/>
    <Search/>
    </div>
  )
}

export default SearchInput