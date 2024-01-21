
import React from 'react'
import FoterLink from '../footerlinks/footerlinks'

export default function Footer() {
  return (
    <>
    
     {/* Footer section start */}
     <footer className=" w-full h-72 bg-gray-500 px-4 pt-8 flex flex-col md:flex-row flex-wrap
         justify-between md:px-12">
          <div className=" text-center font-bold text-4xl">
            About Us
          </div>
          <div className=" h-full min-w-0.5 border rounded bg-red-600 border-red-600"></div>
        <div>
          <p className=" text-pink-200 hover:text-blue-300 cursor-pointer">Contact Us</p>
          <div className=" w-20 h-1 border-b-4 mt-1 rounded border-yellow-400"></div>
          <p className=' font-semibold'>Email:sajjadhaider7536@gmail.com</p>
          <p className=' font-semibold'>Phone No:03457517671</p>
        </div>
        <div>
          <p className=" text-pink-200 hover:text-blue-300 cursor-pointer">Links</p>
          <div className=" w-20 h-1 border-b-4 mt-1 rounded border-yellow-400"></div>
          <div className='cursor-pointer '>
           <FoterLink img="/GitHub-logo-500x281.png" name="Github" link="https://github.com/Sajjad55555?tab=repositories"/>
           <FoterLink img="/linkin-icon.png" name="LinkdIn" link="https://www.linkedin.com/in/sajjad-haider-58021a27a/"/>
           <FoterLink img="/facebook-icon.png" name="Facebook" link="https://web.facebook.com/sajjad.haider.5055"/>
  
          </div>
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
