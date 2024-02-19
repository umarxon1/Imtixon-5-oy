import React from 'react'
import { foodsData } from '../../data/foods/data-food'
import Foods from '../../data/foods/foods'
import Button from '../../components/button'
import { Arrow } from '../../assets/icons/arrow'
import Circcle from "../../assets/images/circle.svg"
import { policyData } from '../../data/policy/policy-data'
import Policy from '../../data/policy/policy'
import { teammatesData } from '../../data/teammates/team-data'
import Team from '../../data/teammates/team'
import { typeData } from '../../data/type/type-data'
import Type from '../../data/type/type'
import aboutBg from "/images/aboutbg.png"
import { Banner } from '../../components/banner'

export const About = () => {
  return (
    <div>
        <section >
        <Banner image={aboutBg} title="About Us"/>
        </section>
        <section>
            <div className=' w-[1519px] mx-auto'>
            <div className='bg-[url("/images/bgImg1.png")] bg-left h-[764px] bg-contain bg-no-repeat'>
            <div className='container flex  justify-end '>
                <div className='mt-[90px]'>
                <p className='font-yellowtail  text-[#7EB693] font-[400] text-[32px]'>About Us</p>
                <h2 className='font-[800] text-[50px] max-w-[500px] text-[#274C5B] leading-[55px] mt-[8px] mb-[14px]'>We do Creative 
Things for Success</h2>
                <p className='font-[400] text-[#525C60] text-[18px] w-[680px] mb-[30px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <p className='font-[400] text-[#525C60] text-[18px] w-[680px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className='flex  gap-[30px] mt-[30px]'>
                  {
                    foodsData.slice(2,4).map((item) => (
                        <Foods key={item.id} {...item}/>
                    ))
                  }
                </div>
                <Button style={{backgroundColor:"#274C5B", color: "white", padding:"20px 40px", borderRadius: "15px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20, marginTop:"30px" }}>
                    Explore More <Arrow/>
                </Button>
                </div>
            </div>
            </div>
            </div>
        </section>
        <section className='bg-[#F9F8F8] py-[190px]'>
            <div className='container flex flex-col items-center'>
            <div className=' flex items-center justify-evenly'>
                  <div>
                    <span className='font-yellowtail  text-[#7EB693] font-[400] text-[32px]'>Why Choose us?</span>
                    <h2 className='font-[800] text-[50px] max-w-[524px] text-[#274C5B] leading-[55px] mb-[24px]'>We do not buy from the open market & traders.</h2>
                    <p className='font-[400] text-[#525C60] text-[18px] w-[680px] mb-[30px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                  <div className='bg-[#ECECEC] flex items-center pl-[27px] gap-[11px] max-w-[300px] rounded-[50px] text-center font-[500] text-[16px] text-[#274C5B] pb-[25px] pt-[25px] mb-[12px]'>
                  <img src={Circcle} alt="" />  100% Natural Product
                  </div>
                  <p className='font-[400] font-openSans text-[16px] max-w-[424px] text-[#525C60] ml-[60px] mb-[24px]'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                  <div className='bg-[#ECECEC] flex items-center pl-[27px] gap-[11px] max-w-[300px] rounded-[50px] text-center font-[500] text-[16px] text-[#274C5B] pb-[25px] pt-[25px] mb-[12px]'>
                  <img src={Circcle} alt="" />  Increases resistance
                  </div>
                  <p className='font-[400] font-openSans text-[16px] max-w-[424px] text-[#525C60] ml-[60px]'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
            </div>
            <div className='bg-[url("/images/naturalProduct.png")] bg-contain bg-no-repeat w-[600px] h-[510px] '>
            </div>
            </div>
            <div className='flex gap-[30px] mt-[91px]'>
                {
                    policyData.map((item) => (
                        <Policy key={item.id} {...item}/>
                    ))
                }
            </div>
            </div>
        </section>
        <section>
            <div className='container flex flex-col items-center'>
                <div className='text-center mb-[42px]'>
                    <span className='font-yellowtail  text-[#7EB693] font-[400] text-[32px]'>Team</span>
                    <h2 className='font-[800] text-[50px]  text-[#274C5B] leading-[55px]'>Our Organic Experts</h2>
                    <p className='font-[400] font-openSans text-[16px] max-w-[822px] mt-[16px] text-[#525C60] '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>
                <div className='flex gap-[27px] mb-[200px]'>
                    {
                        teammatesData.map((user) => (
                            <Team key={user.id} {...user}/>
                        ))
                    }
                </div>
            </div>
        </section>
        <section className='bg-[#274C5B] py-[180px]'>
            <div className='container text-center'>
                <span  className='font-yellowtail  text-[#7EB693] font-[400] text-[32px] mb-[12px]'>About Us</span>
                <h2 className='font-[800] text-[50px] mb-[33px] text-white leading-[55px]'>What We Offer for You</h2>
                <div className='flex gap-[21px]'>
                    {
                        typeData.map((item) => (
                            <Type key={item.id} {...item}/>
                        ))
                    }

                </div>
            </div>
        </section>
    </div>
  )
}
