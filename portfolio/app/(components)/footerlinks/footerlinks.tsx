import React from 'react'
import Link from 'next/link'
export default function FoterLink(props:any) {
  return (
    <>
     <div className=' flex p-1 m-1 hover:text-indigo-400 '>
              <img className='w-5 h-5 rounded-xl' src={props.img} alt="" />
              <p className='ml-2 font-semibold'><Link href={props.link} target='#'>{props.name}</Link></p></div>
    
    
    
    
    </>
  )
}
