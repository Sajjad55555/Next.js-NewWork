
import { Buttonprops } from "@/app/types/componentType"

export default function Button(props:Buttonprops) {
    
    return(
        <div>
        <button className="buttonstyle" onClick={props.onclickHanler}>{props.title} </button>
        </div>
    )
}