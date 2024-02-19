
export const Banner = ({image, title}) => {
    return (
      <section className='bg-contain  w-[1519px] mx-auto bg-no-repeat h-[450px] py-[120px]'style={{backgroundImage: `url(${image})`}}>
          <h1 className='text-center font-[800] text-[50px] text-[#274C5B]'>{title}</h1>
      </section>
    )
  }
  