import ContactLink from "../(components)/contactlink/contactlink";
import Header from "../(components)/header/header";
import Input from "../(components)/input/input";
import Navbar from "../(components)/navbar/navbar";

export default function Contact() {
  return (
   <>
   <div className=" bg-slate-300">
   <Header title="Contact Us"/>
   

          <div className=" w-full h-auto flex flex-col md:flex-row items-center">
            <div className=" w-[400px] h-auto">
             <ContactLink title="Email:" dec="sajjadhaider7536@gmail.com" image="/Email-pic.png"/>
             <ContactLink title="Phone Number" dec="03457517671" image="/phone-image.png"/>
             <ContactLink title="Phone Number" dec="03457517671" image="/phone-image.png"/>
             <ContactLink title="Phone Number" dec="03457517671" image="/phone-image.png"/>
            </div>
            <div className=" w-[600px] bg-indigo-50 rounded h-auto flex flex-wrap flex-col md:flex-row m-8 border">
           <Input title="text" detail="Sajjad Haider" name="Enter Your Name:"/>
           <Input title="text" detail="sajjad@gmail.com" name="Enter Your Email:"/>
           <Input title="text" detail="+923457517671" name="Enter Your Phone"/>
           <Input title="text" detail="Enter your Link" name="Enter Your Social Link"/>
          <div> Message <textarea className="p-2 m-3 flex border border-gray-300 rounded-md w-[400px]" rows={8} placeholder="Message" required></textarea></div>
          <div className=" p-1 mr-10 mx-16">
          <button className=" bg-red-600 hover:text-indigo-500 rounded-md font-bold text-2xl">Submit</button>
          </div>
          
            </div>
          </div>


      </div>
   
   </>
  )
}


