
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';




const Display=()=>{
    const [myData,setMyData]=useState([]);

    let display=async()=>{
        let api='http://localhost:3000/Students';
        let res=await axios.get(api);
        console.log(res.data);
        setMyData(res.data);
    }
    useEffect(()=>{
        display();
    },[])
    let srno=0;
    let ans=myData.map((key)=>{
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
            </tr>
            </>
        )
    })

    return(
        <>
        <h1 style={{display:"flex",justifyContent:"center",backgroundColor:"bisque",padding:"20px"}}>Display Page!</h1>

        <Table striped bordered hover style={{width:"1000px",margin:"auto"}}>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>ID</th>
          <th>Employee no.</th>
          <th>Name</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
        
      </thead>
      <tbody>
      {ans}
      </tbody>
      
    </Table>






        
        </>
    )
}
export default Display;