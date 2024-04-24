import React from 'react'

const Nature = () => {
  return (
    <>
    <div>

        {/* ******* first 4 image  ******* */}

                {/* ******* first 4 image end ******* */}


        <div>
            <div className='md:flex justify-between mx-auto'>
                <div className='md:justify-end md:w-1/2 md:py-[60px] md:px-[180px] mb-[10px] md:mb-[0px] ' >
                    <h1 className='font-pops md:text-[64px] text-[30px] md:font-bold  font-semibold text-center md:text-start '>Our Services</h1>
                    <p className='md:w-[405px] font-pops text-center md:text-start'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

                <div className='md:w-1/2 md:mb-[0px] mb-[10px]'>
                    <div className='relative after:content[""] after:absolute after:top-0 
                    after:left-0 after:w-full after:h-full after:bg-blue-600/30 after:backdrop-brightness-75 after:z-[-1] z-[1]' 
                    style={{background:'url(./images/Services1.png)', paddingTop: '127px', paddingBottom: '127px', paddingLeft:'50px', backgroundRepeat: "no-repeat"}}         
                    >
                    <div className='max-w-6xl mx-auto '>
                    <h1 className='text-white md:text-[36px] text-[30px] md:w-[842px] font-bold leading-normal ' >Modern natural oil and gas refineries..</h1>
                    <div className='mt-8 '>
                    <a href="" className='bg-[red] font-pops text-base text-white font-semibold border-2 px-[20px] py-[10px]' >LEARN MORE</a>
                    </div>
                        </div>
                        </div>  
                     </div>
            </div>

            {/* ****** industry and fuel part ******* */}
            <div className='md:flex'>
                    <div className='md:w-1/2 mb-[5px] md:mb-[0px]	'>
                        <div className='relative after:content[""] after:absolute after:top-0 
                        after:left-0 after:w-full after:h-full after:bg-blue-600/30 after:backdrop-brightness-75 after:z-[-1] z-[1]' 
                        style={{background:'url(./images/service2.png)', paddingTop: '127px', paddingBottom: '127px', paddingLeft:'50px', backgroundRepeat: "no-repeat"}}         
                        >
                        <div className='max-w-6xl  mx-auto '>
                            <h1 className='text-white md:text-[36px] text-[30px] md:w-[842px] font-bold leading-normal	' >Supply of national industries.</h1>
                            <div className='mt-8'>
                            <a href="" className='bg-[red] font-pops text-base text-white font-semibold border-2 md:px-[20px] px-[15px] md:py-[10px] py-[10px]' >LEARN MORE</a>
                            </div>
                        </div>
                        </div>  
                    </div>


                    <div className='md:w-1/2	'>
                        <div className='relative after:content[""] after:absolute after:top-0 
                        after:left-0 after:w-full after:h-full after:bg-blue-600/30 after:backdrop-brightness-75 after:z-[-1] z-[1]' 
                        style={{background:'url(./images/service3.png)', paddingTop: '127px', paddingBottom: '127px',paddingLeft:'50px', backgroundRepeat: 'no-repeat'}}         
                        >
                        <div className='max-w-6xl mx-auto '>
                        <h1 className='text-white md:text-[36px] text-[25px] md:w-[842px] font-bold leading-normal' >National fuel distribution and supply.</h1>
                        <div className='mt-8'>
                        <a href="" className='bg-[red] font-pops text-base text-white font-semibold border-2 px-[20px] py-[10px]' >LEARN MORE</a>
                        </div>
                        </div>
                        </div> 
                    </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Nature