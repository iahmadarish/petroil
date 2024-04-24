import React from 'react'

const Banner = () => {
  return (
    <>
        <div className=' md:py-[256px] md:relative md:after:content[""] after:absolute after:top-0 
        after:left-0 after:w-full after:h-full after:bg-blue-600/30 after:backdrop-brightness-75 after:z-[-1] z-[1] mb-20 mpy-[50px] ' 
        style={{background:'url(./images/homebanner.png)', backgroundRepeat: 'no-repeat'}}         
        >
            <div className='md:max-w-6xl	 mx-auto '>
            <h1 className='md:text-white text-white md:text-[64px] text-[30px] md:w-[842px] p-[20px] font-bold leading-normal	' >We exist since 1975 on the oil and gas industry.</h1>
              <div className='mt-8 pl-[20px]'>
              <a href="" className='font-pops text-base text-white font-semibold border-2 md:px-[20px] px-[10px] md:py-[10px] py-[09px]' >LEARN MORE</a>
              </div>
            </div>
        </div>    

        <div className='max-w-6xl mx-auto md:mb-[100px] mb-[10px] '>
          <div className='md:flex md:justify-between text-center md:text-start item-center'>
          <div className='font-pops font-bold md:text-[48px] text-[20px] leading-normal pb-[10px] md:pb-[0px]'>
            <h4>The biggest</h4>
            <h4>supplier on</h4>
            <h4>the country </h4>
        </div> 
        <div className='m-auto '>
          <p className='font-pops text-base md:w-[651px] item-center p-[15px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </div>
          </div>
        </div>
       


    </>
  )
}

export default Banner
