import React from 'react'
import Image from 'next/image'

export default function Card(props:any) {
  return (
   <>
        <div className="  mt-12 border rounded-xl  flex flex-wrap flex-col">
            <Image width={300} height={300} className=" h-44 rounded-xl" src= {props.image} alt="" />
            <p className=" text-2xl font-bold items-start">{props.title}</p>
            <p>Lorem ipsum dolor sit amet consectetur <br/>
            adipisicing elit. Recusandae,</p>
          </div>
          </>
  )
}
