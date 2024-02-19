import React from 'react'
import { cards } from '../../data/products/products-data'
import Products from '../../data/products/products'
import { Banner } from '../../components/banner'
import shopBg from "/images/shopbg.png"

export const Shop = () => {
  return (
    <div>
      <section>
       <Banner image={shopBg} title="Shop"/>
      </section>
      <section>
        <div className='container flex flex-wrap gap-x-[20px] gap-y-[40px]'>
            {
              cards.slice(0,12).map((card) => (
                <Products key={card.id} {...card}/>
              )) 
            }
        </div>
      </section>
    </div>
  )
}
