import { mycontext } from "./App";
import { useContext } from "react";

const Comp5=()=>{
    const {user}=useContext(mycontext)
    return(
        <>
        <h1>Component5 !!! {user}</h1>
        </>
    )
}
export default Comp5;