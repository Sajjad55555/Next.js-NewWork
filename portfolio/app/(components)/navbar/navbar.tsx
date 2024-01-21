import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <>
        <nav className=' h-14 w-full flex justify-between items-center
     p-4  text-white'>
          <div className='font-bold text-xl text-white'>PortF<span
          className=' text-red-600'>olio</span> </div>
          <div>
            <ul className=' float-left justify-center flex p-2'>
              <li className=" hover:text-red-400 mx-[10px] cursor-pointer"> <Link href="/"> Home</Link></li>
              <li className=" hover:text-red-400 mx-[10px] cursor-pointer"><Link href="/"> About Us</Link></li>
              <li className=" hover:text-red-400 mx-[10px] cursor-pointer"><Link href="/services"> Services</Link></li>
              <li className=" hover:text-red-400 mx-[10px] cursor-pointer"><Link href="/products"> Products</Link></li>
              <li className=" hover:text-red-400 mx-[10px] cursor-pointer"><Link href="/contact"> Contact us</Link></li>
            </ul>
          </div>
          <div >
            <button className='p-2 rounded-2xl pl-1.5 bg-red-600 
             font-bold'>Hire Us</button>
          </div>
        </nav>
   
   
   </>
  )
}
