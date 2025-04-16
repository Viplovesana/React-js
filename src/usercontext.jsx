import { useState,createContext } from "react";

const mycontext=createContext();

const Usercontext=({children})=>{
    const[name,setName]=useState("Viplove!");
    return(
        <>
        <mycontext.Provider value={{name}}>
            {children}
        </mycontext.Provider>
        
        </>
    )
}
export default Usercontext;
export{mycontext};