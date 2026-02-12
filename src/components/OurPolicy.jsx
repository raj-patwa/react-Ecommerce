import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy  = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>
            Exchange policy
        </p>
        <p className='text-gray-400'>
            We offer hassle free Exchange Policy
        </p>
      </div>
        <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>
            7 days retrun policy
        </p>
        <p className='text-gray-400'>
            We provide 7 days return free policy
        </p>
      </div>
        <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>
         Best Customer support
        </p>
        <p className='text-gray-400'>
               We provide 24/7 days customer support
        </p>
      </div>
    </div>
  )
}

export default  OurPolicy
