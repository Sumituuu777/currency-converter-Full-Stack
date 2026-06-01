import { useRef } from "react"
import CureencySelector from "./cureencySelector";

function Converter() {

   const textInput=useRef();

    const handler=()=>{

    }
  return (
    <>
    <div>
    <div>
        <input 
        type="text"
        className=""
        ref={textInput}
        placeholder="Enter amount"
        />
    </div>
    <CureencySelector/>
    <div>
        <button
        className=""
        onClick={handler}>
         Convert
        </button>
    </div>
    </div>
    </>
  )
}

export default Converter