
import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';



const Search=()=>{
    const [name,setName]=useState("");
    const [data,setData]=useState([]);
    const search=async()=>{
        let api=`http://localhost:3000/Students/?name=${name}`;
        let res=await axios.get(api);
        console.log(res.data);
        setData(res.data);
    }

    let ans=data.map((key)=>{
        return(
            <>
            <tr>
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
        <h1 style={{display:"flex",justifyContent:"center",backgroundColor:"bisque",padding:"20px"}}>Search Page!</h1>

        <div style={{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"50px"}}>
        <input type="text" placeholder="Search by name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={search}>Search</button>
        </div>

        <Table striped bordered hover style={{width:"700px",margin:"auto"}}>
      <thead>
        <tr>
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
export default Search;