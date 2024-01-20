import React from 'react'

export default function ContactLink(props:any) {
  return (
    <>
    
    <div className="flex">
              <img className=" w-16 h-20 mt-4" src={props.image} alt="" />
              <div className=" mt-4 ml-3">
                <p className=' text-xl font-bold'>{props.title}</p>
                <p>{props.dec}</p>
              </div>
             </div>
    
    </>
  )
}
