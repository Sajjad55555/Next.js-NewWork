import React from 'react'

export default function Footer() {
  return (
    <>
    
     {/* Footer section start */}
     <footer className=" w-full h-72 bg-gray-700 px-4 pt-8 flex flex-col md:flex-row flex-wrap
         justify-between md:px-12">
          <div className=" text-center font-bold text-4xl">
            About Us
          </div>
          <div className=" h-full min-w-0.5 border rounded bg-red-600 border-red-600"></div>
        <div>
          <p className=" text-pink-200 hover:text-blue-300 cursor-pointer">Contact Us</p>
          <div className=" w-20 h-1 border-b-4 mt-1 rounded border-yellow-400"></div>
          <p>Email:</p>
          <p>Phone No:</p>
        </div>
        <div>
          <p className=" text-pink-200 hover:text-blue-300 cursor-pointer">Links</p>
          <div className=" w-20 h-1 border-b-4 mt-1 rounded border-yellow-400"></div>
          <p>facebook</p>
          <p>LinkdIn</p>
          <p>Youtube</p>
        </div>
        <div>
          <p className=" text-pink-200 hover:text-blue-300 cursor-pointer">Our Services</p>
          <div className=" w-20 h-1 border-b-4 mt-1 rounded border-yellow-400"></div>
          <p>Software Devlpment</p>
          <p>Web Develpment</p>
          <p>Mobile Applications</p>
        </div>




      </footer>

    
    
    </>
  )
}
