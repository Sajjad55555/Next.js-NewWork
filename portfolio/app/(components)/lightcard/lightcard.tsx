export default function BeautifulCard(props:any){
    return(
<div className="box text-white mt-4 items-start" >
    <div>
        <img className="p-1 cursor-zoom-in h-[100%] w-[100%]" src={props.image}alt="" />
        {/* <p>{props.title}</p>
        <p>{props.dec}</p> */}
    </div>
</div>
)
}
// export default function BeautifulCard(props: any) {
//     return (
//       <div className="box text-white mt-4 items-start h-full">
//         <div className="aspect-w-3 aspect-h-4">
//           <img className="p-1 h-full w-full object-cover" src={props.image} alt="" />
//         </div>
//         <div className="p-4">
//           <p className="text-xl font-bold mb-2">{props.title}</p>
//           <p className="text-gray-300">{props.dec}</p>
//         </div>
//       </div>
//     );
//   }
  
  


