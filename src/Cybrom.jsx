import { mycontext } from "./usercontext";
import { useContext } from "react";


const Cybrom=()=>{
    const {name}=useContext(mycontext);
    return(
        <>
        <h1>Welcome to Cybrom!! {name}</h1>
        
        </>
    )
}
export default Cybrom;