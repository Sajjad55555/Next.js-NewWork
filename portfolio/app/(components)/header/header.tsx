import Navbar from "../navbar/navbar"

export default function Header(props:any) {
  return (
    <>
    
    <header className="relative bg-cover w-full h-96">

{/* Background image */}
<img
  className="object-cover w-full h-96 rounded-lg mb-4"
  src="/Header-image.jpg"
  alt=""
/>


{/* Navbar */}
<div className="absolute top-0 left-0 w-full z-10">
  <Navbar />

  <div className=" text-white pt-44 pl-5">
    <p className=" pl-10 text-4xl font-extrabold text-pink-600 cursor-pointer">{props.title}</p>
    <p className=" text-pink-500">The support team is here to help you!</p></div>
</div>
</header>

    </>
  )
}
