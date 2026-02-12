import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => { 
  const {products}=useContext(ShopContext)
  return (
    <div className='flex flex-col sm":flex-row gap-1 sm:gap-10 border-t'>
      <div className='min-w-60'>
        <p className='my-2 text-x1 flex items-center cursor pointer gap-2'>FILTERS</p>

      </div>
      
    </div>
  )
}

export default Collection
