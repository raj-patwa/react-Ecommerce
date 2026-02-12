import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
      <div>
        <img src={assets.logo} className='mb-5 w-22' alt='' />
        <p className='w-full md:w-2/3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti molestias blanditiis impedit atque est distinctio odit velit, doloribus ipsa exercitationem explicabo modi minima excepturi veniam expedita eveniet rem doloremque!
        </p>
        </div>
        <div>
            <p className='text-x1 font-medium mb-5'> COMAPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
           
        
      </div>

      <div>
        <p className='text-x1 font-medium mb-5'>GET IN TOUCH </p>
        <ul className=' flex flex-col gap-1'>
            <li>+1-234-568-543</li>
            <li>contact@forever.com</li>



        </ul>
      </div>
      <div>
<hr  />

        <p className='py-5 text-sm text-center text-gray-500'>CopyRight 2026@ forever.com-ALL RIGHTS SERVED</p>
      </div>
    </div>
  )
}

export default Footer
