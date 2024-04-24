import React from 'react'


const Blog = () => {
  return (
    <div className='bg-[#F0F0F0] md:py-[110px] py-[60px]'>
        <div className='max-w-6xl mx-auto '>
            <div className='md:flex md:justify-between '>
            <div className='mb-[10px] md:mb-[0px] relative after:content[""] after:absolute after:top-0 after:left-0 after:w-[340px] after:h-full after:bg-blue-600/30 after:backdrop-brightness-75 after:z-[-1] z-[1] ' 
            style={{ background: 'url(./images/blog1.png)', paddingTop: '75px', paddingBottom: '75px', paddingLeft:'46px', paddingRight:'46px', backgroundRepeat:'no-repeat'}}>
                
                <h1 className='font-pops text-[24px] font-semibold text-white w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                <div className='mt-8'>
                    <a href="" className='bg-[#D9D9D9] font-pops text-base text-white font-semibold border-2 px-[20px] py-[10px]' >LEARN MORE</a>
                </div>
            </div> 
            {/* *****/}
            <div className='mb-[10px] md:mb-[0px] relative after:content[""] after:absolute after:top-0 after:left-0 after:w-[340px] after:h-full after:bg-blue-600/30 after:backdrop-brightness-75 after:z-[-1] z-[1] ' 
            style={{ background: 'url(./images/blog2.png)', paddingTop: '75px', paddingBottom: '75px', paddingLeft:'46px', paddingRight:'46px', backgroundRepeat:'no-repeat'}}>
                
                <h1 className='font-pops text-[24px] font-semibold text-white w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                <div className='mt-8'>
                    <a href="" className='bg-[#D9D9D9] font-pops text-base text-white font-semibold border-2 px-[20px] py-[10px]' >LEARN MORE</a>
                </div>
            </div>        
            {/* ********/}
            <div className='mb-[10px] md:mb-[0px] relative after:content[""] after:absolute after:top-0 after:left-0 after:w-[340px] after:h-full after:bg-blue-600/30 after:backdrop-brightness-75 after:z-[-1] z-[1] ' 
            style={{ background: 'url(./images/blog3.png)', paddingTop: '75px', paddingBottom: '75px', paddingLeft:'46px', paddingRight:'46px', backgroundRepeat:'no-repeat'}}>
                
                <h1 className='font-pops text-[24px] font-semibold text-white w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                <div className='mt-8'>
                    <a href="" className='bg-[#D9D9D9]  font-pops text-base text-white font-semibold border-2 px-[20px] py-[10px]' >LEARN MORE</a>
                </div>
            </div>        
            </div>
        
        
              <div className='flex mt-[30px] justify-end'>
              <h1 className='text-end  text-[16px] font-pops font-bold'>MORE FROM THE BLLOG </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="black"/>
              </svg> 
              </div>
        </div>       
    </div>
  )
}

export default Blog

