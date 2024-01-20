import React from 'react'

export default function Input(props:any) {
  return (
    <>
    <div> {props.name}
    <input
            type={props.title}
            placeholder={props.detail}
            className="p-2 m-3 flex border border-gray-300 rounded-md"
          />
    </div>
    
    </>
  )
}
