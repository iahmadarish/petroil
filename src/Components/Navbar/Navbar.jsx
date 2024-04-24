
import React, { useState } from 'react'
// import { AiOutlineBars } from 'react-icons/Ai'



const Navbar = () => {
  const [show, setShow] = useState(false)

  
  return (
    <>
        <nav className='bg-[#F40404] py-[30px]'>
          <div className='max-w-6xl	 mx-auto'>
            <div className='flex justify-between item-center'>

                          {/* logo  */}
                   <div className='w-1/4 p-[7px] '> 
                   <img src="./images/Logo (1).png" alt="logo" className='pl[20px]' style={{ MmpaddingLeft: '20px'}}/> 
                   </div>

                   <div className='flex justify-end'>
                           {/* small device menu button  */}
                   <div onClick ={()=> setShow(!show)} className='md:hidden'>
                  {
                    show ? <p className='pr-[20px]'><img src="./images/x.png" alt="x" className='' /> </p> : <p className='pr-[20px]'><img src="./images/baricon.png" alt="baricon" /> </p>
                  }
                   </div>

                        {/* nav item  */}
                    <div className='md:w-3/4 '> 
                        <ul className={`md:flex justify-end gap-x-[54px] item-center md:static absolute top-[-200px] left-0 pl-[20px] ${show ? 'top-[128px] bg-[#F40404] 500 py[20px] w-full ': 'top-[-200px] w-full bg-green 500 py[20px]' }` }>
                          <li><a href="" className='font-pops text-[20px] text-white font-semibold'> Home </a></li>
                          <li><a href="" className='font-pops text-[20px] text-white font-semibold'> Services </a></li>
                          <li><a href="" className='font-pops text-[20px] text-white font-semibold'> About </a></li>
                          <li><a href="" className='font-pops text-[20px] text-white font-semibold'> Gallery </a></li>
                          <li><a href="" className='font-pops text-[20px] text-white font-semibold'> blog </a></ li>
                          <li className='font-pops text-base text-white font-semibold border-2 px-[20px] py-[10px]'><a href="" > CONTACT </a></ li>
                        </ul>
                     </div>
                   </div>                
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar