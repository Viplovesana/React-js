

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Insert=()=>{
  const [input,setInput]=useState({});
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}));
    console.log(input);
  }

  const handleSub=async(e)=>{
    e.preventDefault();
    let api='http://localhost:3000/Students';
    let res=await axios.post(api,input);
    console.log(res.data);
    toast.success("Data Saved!!")

    setInput(
      {
        empno:"",
        name:"",
        city:"",
        salary:""
      }
    )
    
  }

  
    return(
        <>
                    
        
        <h1 style={{display:"flex",justifyContent:"center",backgroundColor:"bisque",padding:"20px"}}>Insert Page!</h1>

        <Form style={{width:"350px",border:"2px solid black", height:"450px",borderRadius:"5px",padding:"20px",display:"flex",flexDirection:"column",margin:"auto",backgroundColor:"grey"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee No.</Form.Label>
        <Form.Control type="text" onChange={handleInput}  name='empno' value={input.empno}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" onChange={handleInput}  name='name' value={input.name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" onChange={handleInput}  name='city'value={input.city}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" onChange={handleInput}  name='salary' value={input.salary}/>
      </Form.Group>
     
      <Button type="submit" style={{border:"2px solid black"}} onClick={handleSub}>
        Submit
      </Button>
    </Form>


    <ToastContainer />
        </>
    )
}
export default Insert;