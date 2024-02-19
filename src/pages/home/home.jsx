import React from 'react'
import { HomeText } from '../../assets/icons/homeText'
import Button from '../../components/button'
import { Arrow } from '../../assets/icons/arrow'
import Card from './components/card'
import { AboutUs } from '../../assets/icons/aboutUs'
import { CardData } from './components/card-data'
import { foodsData } from '../../data/foods/data-food' 
import Foods from '../../data/foods/foods'
import { cards } from '../../data/products/products-data'
import Products from '../../data/products/products'
import { Star } from '../../assets/icons/star'
import { circleData } from './components/circle/circle-data'
import Circle from './components/circle/circle'
import { productCategoriesData } from './components/categories/categories-data'
import Categories from './components/categories/categories'
import { discoverData } from './components/discover/discover-data'
import Discover from './components/discover/discover'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <section className='bg-[#F1EFF0]'>
            <div className='bg-[url("/images/homeBackground.jpeg")] w-[1519px] mx-auto bg-contain bg-no-repeat  h-[700px] pt-[200px]'>
            <div className='container '>
                <div className='ml-[100px]'>
                    <span className='text-[#7EB693] font-yellowtail   font-[400] text-[32px] '>100% Natural Food</span>
                    <h2 className='text-[#274C5B] font-[800] text-[50px] max-w-[390px] mb-[23px] '>Choose the best healthier way <br /> of life</h2>
                    <Button  style={{backgroundColor: "#EFD372", color: "#274C5B", padding:"20px 39px", borderRadius: "30px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20}}>
                        Expolore Now <Arrow/>
                    </Button>
                </div>
            </div>
            </div>
        </section>
        <section>
            <div className='container'>
                <div className='flex gap-[36px] mb-[150px] mt-[150px]'>
                {
                    CardData.map((item) => (
                        <Card key={item.id} {...item}/>
                    ))
                }
                </div>
            </div>
        </section>
        <section className=' bg-[#F9F8F8]'>
            <div className='bg-[url("/images/heroBackground.png")] w-[1519px] mx-auto h-[898px] bg-contain bg-no-repeat'>
            <div className='container flex  justify-end '>
                <div className='mt-[165px]'>
                <AboutUs/>
                <h2 className='font-[800] text-[50px] max-w-[702px] text-[#274C5B] leading-[55px] mt-[8px] mb-[14px]'>We Believe in Working Accredited Farmers</h2>
                <p className='font-[400] text-[#525C60] font-openSans text-[18px] w-[680px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className='flex flex-col gap-[30px] mt-[30px]'>
                  {
                    foodsData.slice(0,2).map((item) => (
                        <Foods key={item.id} {...item}/>
                    ))
                  }
                </div>
                <Button style={{backgroundColor:"#274C5B", color: "white", padding:"20px 40px", borderRadius: "30px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20, marginTop:"30px" }}>
                  <Link to={"/shop"}>Shop Now</Link> <Arrow/>
                </Button>
                </div>
            </div>
            </div>
        </section>
        <section>
            <div className='container mt-[176px] flex flex-col items-center'>
                  <div className='text-center mb-[40px]'>
                    <span className=' font-yellowtail text-[#7EB693] font-[400] text-[36px]'>Categories</span>
                    <h2 className='font-[800] text-[46px] text-[#274C5B]'>Our Products</h2>
                  </div>
                  <div className='flex flex-wrap items-center  gap-[20px]'>
                    {
                        cards.slice( 0,8 ).map((item) => (
                        <Products key={item.id} {...item}/>
                      ))
                    }
                  </div>
                  <div className='mt-[100px]'>
                  <Button style={{backgroundColor:"#274C5B", color: "white", padding:"20px 40px", borderRadius: "30px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20,  }}>
                  <Link to={"/shop"}>Load More</Link> <Arrow/>
                  </Button>
                  </div>
            </div>
        </section>
        <section>
            <div className='bg-[url("/images/BackgroundImage4.png")] bg-contain bg-no-repeat  h-[1267px] mt-[200px] flex flex-col items-center  w-[1519px] mx-auto'>
            <div className='flex flex-col items-center text-center border-b-[2px] pb-[129px] mb-[102px]'>
                <div className='mb-[60px] mt-[80px]'>
                    <span className=' font-yellowtail text-[#7EB693] font-[400] text-[32px]' >Testimonial</span>
                    <h2 className='font-[800] text-[40px] text-[#274C5B]'>What Our Customer Saying?</h2>
                </div>
                <div className='mb-[25px]'>
                    <div className='bg-[url("/images/shalola.png")] bg-contain bg-no-repeat w-[115px] h-[115px] mb-[20px]'>
                    </div>
                    <div className='flex'>
                    <Star/> <Star/> <Star/> <Star/> <Star/>
                    </div>
                </div>
                <div>
                    <p className='font-[400] text-[14px] text-[#525C60] max-w-[730px] font-openSans mb-[20px]'>
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <h5 className='font-[600] text-[18px] text-[#274C5B]'>Sara Taylor</h5>
                    <span className='font-[400] text-[12px] text-[#525C60] font-openSans'>Consumer</span>
                </div>
            </div>
            <div className='flex gap-[62px]'>
                {
                    circleData.map((item) => (
                        <Circle key={item.id} {...item}/>
                    ))
                }
            </div>
            </div>
        </section>
        <section className='bg-[#274C5B] py-[200px]'>
                <div className='container'>
                <div className='flex justify-between items-end mb-[48px]'>
                        <div>
                            <span className=' font-yellowtail  text-[#7EB693] font-[400] text-[32px]'>Offer</span>
                            <h2 className='font-[800] text-[50px] max-w-[570px] text-white leading-[45px] mt-[8px]'>We Offer Organic For You</h2>
                        </div>
                        <div>
                        <Button style={{backgroundColor:"#EFD372", color: "#274C5B", padding:"25px 40px", borderRadius: "15px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20,  }}>
                            View All Products <Arrow/>
                        </Button>
                        </div>
                    </div>
                    <div className='flex gap-[20px] mt-[50px]'>
                        {
                           cards.slice( 12, 16).map((item) => (
                            <Products key={item.id} {...item}/>
                           )) 
                        }
                    </div>
                </div>
        </section>
        <section >
            <div className='flex max-w-[1519px] mx-auto relative'>
            <div className='bg-[url("/images/field.png")] bg-contain bg-no-repeat w-[50%] h-[700px]'></div>
            <div>
                <div className='max-w-[789px] pl-[89px] rounded-[30px] mt-[70px] py-[60px] pr-[65px] bg-[#fff] absolute right-[200px]'>
                    <span className=' font-yellowtail  text-[#7EB693] font-[400] text-[32px]'>Eco Friendly</span>
                    <h2 className='font-[800] text-[40px] text-[#274C5B] max-w-[490px] leading-[44px] mb-[25px]'>Econis is a Friendly Organic Store</h2>
                    <div className='flex flex-col gap-[35px]'>
                        <div>
                            <h5 className='font-[500] text-[22px] text-[#274C5B]'>Start with Our Company First</h5>
                            <p className='font-[400] text-[14px] text-[#525C60] max-w-[530px] font-openSans'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div>
                            <h5 className='font-[500] text-[22px] text-[#274C5B]'>Learn How to Grow Yourself</h5>
                            <p className='font-[400] text-[14px] text-[#525C60] max-w-[530px] font-openSans'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div>
                            <h5 className='font-[500] text-[22px] text-[#274C5B]'>Farming Strategies of Today</h5>
                            <p className='font-[400] text-[14px] text-[#525C60] max-w-[530px] font-openSans'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <section className='bg-[#F1F8F4]'>
            <div className=' max-w-[1519px] mx-auto flex gap-[40px] py-[187px]'>
            {
                productCategoriesData.map((item) => (
                    <Categories key={item.id} {...item}/>
                ))
            }
            </div>
        </section>
        <section className='mb-[250px] mt-[170px]'>
            <div className='container'>
            <div className='flex justify-between items-end mb-[48px]'>
                        <div>
                            <span className=' font-yellowtail  text-[#7EB693] font-[400] text-[32px]'>News</span>
                            <h2 className='font-[800] text-[40px] max-w-[570px] text-[#274C5B] leading-[45px] mt-[8px]'>Discover weekly content about organic food, & more</h2>
                        </div>
                        <div>
                        <Button style={{backgroundColor:"#fff", color: "#274C5B", padding:"20px 40px", borderRadius: "30px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20, border:"2px solid green" }}>
                            More News <Arrow/>
                        </Button>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        {
                            discoverData.map((item) => (
                                <Discover key={item.id} {...item}/>
                            ))
                        }
                    </div>
            </div>
        </section>
        
    </div>
  )
}
