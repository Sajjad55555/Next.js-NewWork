import React from 'react'

export default function ProdCard(product:any) {
  return (
    <>
     <div className=' m-2 w-52 mt-3 border'>
            <img className="h-60 w-44" src={product.image} alt="" />
            <p className=" text-black max-w-sm text-lg font-semibold mb-2">{product.title}</p>
            <p className="text-gray-600 font-semibold">Rs:{product.price}</p>
            <button  className=" mx-auto hover:text-black bg-blue-500 text-white rounded">Add to Cart</button>
            </div>
    
    </>
  )
}
