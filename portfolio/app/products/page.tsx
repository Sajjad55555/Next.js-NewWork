import React from 'react'
import Header from '../(components)/header/header'
import Line from '../(components)/lining/lining'
import ProdCard from '../(components)/productcard/productcard'
const GetProduct = async ()=>{
  try{
  let responce = await fetch("https://fakestoreapi.com/products")
  const result = responce.json()
  return result
}
  catch (error) {
    console.error('Error fetching product data:', error);
  }
}

export default async function Products() {
  const products = await GetProduct()
  return (
    
    <div>
        <Header title="Products"/>
        <div className='h-auto w-100 items-center flex flex-wrap flex-col'>
            <Line title="Our Products"/>
        </div>
        <div className="border flex flex-wrap mt-3  justify-center">
        {products.map((product:any)=>(
          
           <ProdCard 
          title={product.title} 
          image={product.image}
          price={product.price}
          
           />
        ))}
        
         
        </div>
    </div>
  )
}
