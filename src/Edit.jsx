
import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



const Edit=()=>{
    const {id}=useParams();
    const [input,setInput]=useState({});
    

    const loadData=async()=>{
        let api=`http://localhost:3000/Students/${id}`;
        const res = await axios.get(api);
        console.log(res.data);
        setInput(res.data);
       }
       useEffect(()=>{
         loadData();
       },[])


       const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }

       const handleSubmit=async()=>{

        let api=`http://localhost:3000/Students/${id}`;
        const res = await axios.put(api, input);
        
       toast.success("Data succesfully Updated!", {
            position: "top-left"
          });
       
       
        }

    return(
        <>

<h1> Edit Employee Data of id: {id}</h1> 

           Edit Employee No : <input type="text" name="empno" value={input.empno} onChange={handleInput} />
           <br />
           Edit Name : <input type="text" name="name" value={input.name}
           onChange={handleInput} />
           <br />
           Edit City : <input type="text" name="city" value={input.city} onChange={handleInput} />
           <br />
           Edit Salary : <input type="text" name="salary" value={input.salary} onChange={handleInput} />
           <br />

           <button onClick={handleSubmit}> Edit Save!</button> 


           
      

    <ToastContainer />
        </>
    )
}
export default Edit;