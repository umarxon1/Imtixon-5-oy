import React from 'react'
import shopBg from "/images/shop-singlebg.png"
import { Banner } from '../../components/banner'
import { useParams } from 'react-router-dom'
import { cards } from '../../data/products/products-data'
import Card from './components/card'
import Button from '../../components/button'
import Products from '../../data/products/products'

export const ShopSingle = () => {
  const { id } = useParams()
  const ID = parseInt(id)
  console.log(ID);
  const SingleCard = cards.find(item => item.id == ID)
  console.log(SingleCard);

  return (
    <div>
      <Banner image={shopBg} title="Shop Single"/>
      <section>
          <div className='container'>
            <div>
            <Card key={212} {...SingleCard}/>
            </div>
            <div className='flex flex-col items-center gap-[20px]'>
              <div className='flex gap-[20px] mt-[90px]'>
                <Button style={{backgroundColor:"#274C5B", color: "white", padding:"28px 40px", borderRadius: "15px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20,}}>
                  Product Description
                </Button>
                <Button style={{backgroundColor:"#EFF6F1", color: "#274C5B", padding:"28px 40px", borderRadius: "15px", display:"flex", alignItems: "center", gap:"10px", fontWeight:700, fontSize:20,}}>
                  Additional Info 
                </Button>
                
              </div>
              <p className='font-[400] text-[18px] font-openSans text-[#525C60] text-center max-w-[1130px]'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw. </p>
            </div>
          </div>
      </section>
      <section>
        <div className='container my-[140px]'>
          <h2 className='font-[800] text-[50px] text-[#274C5B] text-center'>Related Products</h2>
          <div className='flex gap-[20px]'>
            {
              cards.slice(0,4).map((item) => (
                <Products key={item.id} {...item}/>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}
