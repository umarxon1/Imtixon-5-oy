import React from 'react'
import { Logo } from '../../assets/icons/logo'
import { Insatgram } from '../../assets/icons/instagram'
import { Facebook } from '../../assets/icons/facebook'
import { Twitter } from '../../assets/icons/twitter'
import { Pinterest } from '../../assets/icons/pinterest'
import Button from '../../components/button'

export const Footer = () => {
  return (
    <footer className='mt-[141px] mb-[70px]'>
        <div  className='container max-w-[1420px] mx-auto px-[20px]' >
         <div className='bg-[url("/images/backgr.png")] bg-cover w-[100%] flex rounded-r-[30px] h-[323px] px-[71px]'>
            <div className='flex items-center justify-between w-[100%]'>
                <div className='font-[800] text-[48px] max-w-[357px] text-white'>
                Subscribe to our Newsletter
                </div>
                <div className='flex gap-[6px]'>
                    <input type="text" placeholder='Your Email Address' className='w-[349px] h-[70px] rounded-[15px] indent-[20px] focus:outline-none'/>
                    <Button style={{ backgroundColor: '#274C5B', color: 'white', padding: '20px 65px', borderRadius:'15px'}}>
                       Subscribe
                    </Button>
                </div>
            </div>
         </div>
            <div className='flex justify-evenly mt-[117px]'>
            <div className='border-r-[2px] max-w-[420px] px-[50px] text-right'>
                <h2 className='font-bold text-[28px] mb-[32px] '>Contact Us</h2>
                <div className=' flex flex-col gap-[32px]'>
                <div>
                <h5 >Email</h5>
                <span>needhelp@Organia.com</span>
                </div>
                <div>
                <h5>Phone</h5>
                <span>666 888 888</span>
                </div>
                <div>
                <h5>Address</h5>
                <span>88 road, borklyn street, USA</span>
                </div>
                </div>
            </div>
            <div className='text-center flex flex-col  items-center border-r-[2px] px-[42px]'>
              <div className='flex items-center gap-[5px]'>
              <Logo/>
              <h2 className='font-bold text-[28px]'>Organick</h2>
              </div>
              <p className='max-w-[543px] mt-[23px]'>Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing </p>
                <div className='flex gap-[15px] mt-[49px]'>
                    <Insatgram/>
                    <Facebook/>
                    <Twitter/>
                    <Pinterest/>
                </div>
            </div>
           
            <div className='px-[50px]'>
                <h2 className='font-bold text-[28px] mb-[24px]'>Utility Pages</h2>
                <div className='flex flex-col gap-[22px]'>
                    <span>Style Guide</span>
                    <span>404 Not Found</span>
                    <span>Password Protected</span>
                    <span>Licences</span>
                    <span>Changelog</span>
                </div>
            </div>
            </div>
        </div>
    </footer>
  )
}
