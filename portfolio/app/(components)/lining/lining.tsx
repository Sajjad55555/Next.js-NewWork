import React from 'react'

export default function Line(props:any) {
  return (
    <>
    
    <div>
            <p className=" mt-6 text-4xl font-bold text-blue-400 hover:text-red-400"> {props.title} </p>
            <div className=" w-30 h-1 border-b-4 mt-1 rounded border-yellow-400"></div>
          </div>
    
    
    
    </>
  )
}
