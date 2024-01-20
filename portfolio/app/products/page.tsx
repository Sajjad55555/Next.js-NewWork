import React from 'react'
import Header from '../(components)/header/header'
import Line from '../(components)/lining/lining'

export default function Products() {
  return (
    <div>
        <Header title="Products"/>
        <div className='h-auto w-100 items-center flex flex-wrap flex-col'>
            <Line title="My Products"/>
        </div>
        <div className="border flex flex-wrap mt-3 items-center justify-center">
            <div className=' m-2 border'>
            <img className="h-60 w-44" src="/course1.png" alt="" />
            <p className=" text-black max-w-sm text-lg font-semibold mb-2">My Product</p>
            <p className="text-gray-600">Price</p>
            <button  className=" mx-auto hover:text-black bg-blue-500 text-white rounded">Add to Cart</button>
            </div>
            <div className=' m-2'>
            <img className="h-60 w-44" src="/course1.png" alt="" />
            <p className=" text-black max-w-sm text-lg font-semibold mb-2">My Product</p>
            <p className="text-gray-600">Price</p>
            <button  className=" mx-auto hover:text-black bg-blue-500 text-white rounded">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
