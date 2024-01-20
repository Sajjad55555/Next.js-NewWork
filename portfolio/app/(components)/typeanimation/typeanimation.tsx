"use client"
import { TypeAnimation } from "react-type-animation";

export default function Animate() {
  return (
    <>
       <div className=" text-white text-6xl p-20 pt-40 font-bold
           animate-pulse ">
            <TypeAnimation sequence={["Hello i am Next-Develpor", 1000, "My Self Sajjad Haider"]}
              wrapper="span"
              speed={20}
              repeat={Infinity} />
          </div>
</>
  )
}
