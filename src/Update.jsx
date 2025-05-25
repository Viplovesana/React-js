
import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Update=()=>{
    const [data,setData]=useState([]);
    
    const navigate=useNavigate();

    const updateData=async()=>{
        let api='http://localhost:3000/Students';
        let res=await axios.get(api);
        console.log(res.data);
        setData(res.data);

    }   
    useEffect(()=>{
        updateData();
    },[])

    let srno=0;
    let ans=data.map((key)=>{
        srno++;
        return(
            <>
            <tr>
                <td>{srno}</td>
                <td>{key.id}</td>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.salary}</td>
                <td onClick={()=>{del(key.id)}}><MdDelete /></td>
                <td onClick={()=>{myEdit(key.id)}}> <MdModeEdit /></td>
            </tr>
            </>
        )
    })

    const myEdit=(id)=>
    {
        navigate(/edit/${id});
        
    }


    let del=async(id)=>{
        let api=`http://localhost:3000/Students/${id}`;
        let res=await axios.delete(api);
        console.log(res.data);
        toast.warning("Data deleted!");
        updateData();
        

    }

    
     return(
        <>
        <h1 style={{display:"flex",justifyContent:"center",backgroundColor:"bisque",padding:"20px"}}>Update Page!</h1>

        <Table striped bordered hover style={{width:"1000px",margin:"auto"}}>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>ID</th>
          <th>Employee no.</th>
          <th>Name</th>
          <th>City</th>
          <th>Salary</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        
      </thead>
      <tbody>
      {ans}
      </tbody>
      
    </Table>
      

    <ToastContainer />
        </>
    )
}
export default Update;