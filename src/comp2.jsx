
import { mycontext } from "./App";
import { useContext } from "react";
import Comp3 from "./comp3";

const Comp2=()=>{
    const{user}=useContext(mycontext)
    return(
        <>
        <h1>Component2 !!! {user}</h1>
        <Comp3/>
        </>
    )
}
export default Comp2;