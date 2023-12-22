"use client"
import Button from "../button/button"

 
export default function contactForm(){
    const onclickHanler=()=>{
        alert("Hacked Cracked")
    }
    return(
        <div>
            <Button onclickHanler={onclickHanler} title="Contact Me"></Button>
        </div>
    )
}