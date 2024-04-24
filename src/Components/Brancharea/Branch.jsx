import React from 'react'


const Branch = () => {
  return (
    <div>
        <div className=' bg-[red]'>
          <img src="./images/Maps.png" alt="maps" />
        </div>
        
        <div className=' bg-[red] py-[46px] border-b-[2px]	'>
            <div className='md:max-w-6xl	 mx-auto md:flex justify-evenly	 md:gap-x-[50px] '>
              <h1 className='font-pops md:text-[30px] text-[25px] text-white font-semibold text-center md:text-start'>Want to join as member branch in your area?</h1>
              <div className=' text-center md:text-start pt-[25px] md:pt-[0px] pl-[10px] '>
              <a href="" className='font-pops text-base text-white font-semibold border-2 md:px-[20px] px-[10px] md:py-[10px] py-[09px]' > Contact </a>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Branch