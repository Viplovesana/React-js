// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// const App = () => {
//   return (      
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="home" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


//.........................................................................................



// const App = ()=>{
//   return(
//       <>
//     <div style={{border:"3px solid red" , width:"600px", height:"400px", margin:"auto",borderRadius:"20px" ,color:"red",backgroundColor:"blue",color:"white"}}>
//       <div style={{border:"3px solid blue" , width:"400px", height:"300px", margin:"auto",borderRadius:"20px",alignItems:"center",backgroundColor:"yellow",marginTop:"50px"}}>
//         <div style={{border:"3px solid green" , width:"300px", height:"200px", margin:"auto",borderRadius:"20px",alignItems:"center",backgroundColor:"red",marginTop:"45px"}}>
//           <h1 style={{marginLeft:"90px", marginTop:"70px"}}>Cybrpm</h1>
//         </div>
//       </div>
//     </div>
      
//       </>
//   )
// }
// export default App;



// const Data={

//   color:"red"
  
// }


// const App = ()=>{
//   return(
//       <>
   
//       <h1 style={Data}>Welcome to cybrom</h1>
//       </>
//   )
// }
// export default App;


// import Cybrom from "./Cybrom";

// const App = ()=>{
//   return(
//       <>
   
//       <h1 className="data">Welcome to cybrom</h1>
//       <Cybrom/>
//       </>
//   )
// }
// export default App;







// import Component from "./Component";
// import Component2 from "./Component2";
// import Component3 from "./Component3";


// import EmpData from "./Empdata";


// const App=()=>{
//   return(
//     <>
//     <h1 align="center">Welcome viplove!!</h1>
//     <Component/>
//     <Component2/>
//     <Component3/>
    
//     </>
//   )
// }
// export default App;


///..............props.............................................................................

// import Collage from "./Collage";




// const App=()=>{
//   return(
//     <>
//     <h1 align="center">Welcome viplove!!</h1>
//     <Collage
    
//     nm="shibyiii"
//     seats={62736}
//     fees={5727273}
    
//     />
 
    
//     </>
//   )
// }
// export default App;



// /......................................................................................................

//we are passing the data with the help of props attribute


// import Collage from "./Collage";

// const name = "rgpv"
// const seats =72838
// const fees =78379

// const App = ()=>{
//   return(

//     <>
//      <h1 align="center">Welcome viplove!!</h1>
//      <Collage

//     nm={name}
//     sts={seats}          
//     fs={fees} 
//      />
    
//     </>

//   )
// }
// export default App;



///...................................................................................................

// function objects

// import Collage from "./Collage";

// const Student = {
//   name : "rgpv",
//   subject : 41,
//   fees : 45000
// }


// const App =()=>{
//   return(
// <>

// <h1 align="center">Welcome viplove!!</h1>
// <Collage

// nm={Student.name}
// sb={Student.subject}
// fs={Student.fees}

// />



// </>

//   )
// }
// export default App;


////...................................................................................





//..........Map method...............................

// const Greet = ()=>{

// const Subject = ["HTML","css","java.scipt","React","python"]

// const ans = Subject.map((key)=>{

// return(

// <option>{key}</option>

// )

// })

// return(
//     <>
    
//    <h1 align="center">Welcome viplove!!</h1>
//    <select>{ans}</select>
    
//     </>
//   )
// }
// export default Greet;





// const Drop =()=>{

//   const Subject = ["HTML","CSS","javascript","python","React"]

//   const ans = Subject.map((key)=>{
//     return(
//       <option>{key}</option>
//     )
//   })
//     return(
//     <>
//     <h1 align="center">Welcome!!!!</h1>

//     <select name="" id="">{ans}</select>
    
//     </>
//   )
// }
// export default Drop;



//..........................................................................................


// const Subject = [
//   {
//     "rollno":123,
//     "name":"viplove",
//     "city":"bhopal",
//     "fees":4500,
//   },
//   {
//     "rollno":127,
//     "name":"aryan",
//     "city":"dewas",
//     "fees":7780,
//   },
//   {
//     "rollno":125,
//     "name":"abheejet",
//     "city":"dewas",
//     "fees":4570,
//   },
//   {
//     "rollno":167,
//     "name":"kalpit",
//     "city":"kolkata",
//     "fees":4807,
//   },
//   {
//     "rollno":124,
//     "name":"jojo",
//     "city":"ujjain",
//     "fees":4700,
//   },
// ]

// const ans =Subject.map((key)=>{
// return(
// <tr>
//   <td>{key.rollno}</td>
//   <td>{key.name}</td>
//   <td>{key.city}</td>
//   <td>{key.fees}</td>
// </tr>
// )
// })
// const Data=()=>{
//   return(
//     <>
    
//     <h1 align="center">Welcome!!!!</h1>

//     <table border="2" width="500" height="400">
//       <tr>
//         <th>Rollno</th>
//         <th>Name</th>
//         <th>City</th>
//         <th>Fees</th>
//       </tr>
//       {ans}
//     </table>

    
//     </>
//   )
// }
// export default Data;




//.................................................................................................
// import EmpData from "./Empdata";
// import EmpDesign from "./EmpDesign";
// const Data = ()=>{

// const ans =EmpData.map((key)=><EmpDesign

// no={key.empno}
// nm={key.empname}
// ds={key.designation}
// sal={key.salary}



// />
  
// )

//   return(
//     <>
//     <h1 align="center">Welcome!!!!</h1>

//     <table border="2" width="600" >
//       <tr>
//         <th>Empnumber</th>
//         <th>Empname</th>
//         <th>designation</th>
//         <th>salary</th>

//       </tr>
//       {ans}
//     </table>
    
//     </>
//   )
// }

// export default Data;



///......................................................................................


// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Layout from "./Layout";

// const Data =()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route path="home" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="Contact" element={<Contact/>}/>

//       </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// };
// export default Data;


//..............................................................................................

// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Company from "./Company";
// import Contact from "./Contact";
// import Nofound from "./Nofound";
// import Product from "./Product";
// import Home from "./Home";



// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="home" element={<Home/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       <Route path="product" element={<Product/>}/>
//       <Route path="company" element={<Company/>}/>
//       <Route path="*" element={<Nofound/>}/>

//       </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// };
// export default App;



// const App=()=>{

//   const Myname=(nm)=>{
//     alert(`my name is ${nm}`)
//   }
//   }
//   return(
//     <>
//     <h1>welcome!!</h1>

//     <button onclick={()=>{Myname("viplove")}}>click here</button>
//     </>
//   )


// export default App;


// const App=()=>{

//   const Display=(e)=>{
//     alert("Name: " + nm+ " btnName : " + e.target.name+" value :"+e.target.value);

//   }
 

//   return(
//     <>
//     <button name="myBTN" value="btn0" onClick={(e)=>{Display("neeraj",e)}}>clik here</button>
//     </>
//   )
// }
// export default App;


// const Data=()=>{

// const display=()=>{
//   alert("this is react js");
// }

//   return(
//     <>
//    <button onClick={display}>click here</button>
//     </>
//   );
// };
// export default Data;



// const App=()=>{

//   const display=()=>{
//     alert("this is my react js")
//   }

//   return(

//     <>
//     <button onClick={display}>clik here</button>
//     </>
//   )
// }
// export default App;


// const App=()=>{
// const myshow=(nm)=>{
//   alert(`my name is ${nm}`);
 
  
// }

//   return(
//     <>
//    <button onClick={()=>{myshow("viplove")}}>click here</button>
//     </>
//   )
// }
// export default App;

//.....................................................................................................

// const App=()=>{
//   const myshow=(nm,age,e)=>{
//     alert("Name: "+ nm + " "+ "Type: " + e.type + " "+ "Age: "+ age + "Name: "+" "+ e.target.name + " "+ "Value: "+ e.target.value);
   
    
//   }
  
//     return(
//       <>
//      <button name="myBTN" value="btn0" onClick={(e)=>{myshow("viplove",22,e)}}>click here</button>
//       </>
//     )
//   }
//   export default App;









//..................................................................................................


// import { useState } from "react";

// import Button from 'react-bootstrap/Button';



// const State=()=>{
//   const [cnt,SetCnt]=useState(0);

//   const myInc=()=>{
//     SetCnt(cnt+1);

//   }
//   const myDec=()=>{
//     if(cnt<1)

//       {
//       alert("count not less than 1")
//     }

//     else
//     {    
//       SetCnt(cnt-1);
//     }

//   }
//   return(
//     <>
//     <div className="count">

//       <h1>Welcome!!!</h1>

//       <Button variant="primary" onClick={myInc}>Increament</Button>

//       <h1>Count :{cnt}</h1>

//       <Button variant="primary" onClick={myDec}>Decreament</Button>

//       <Button variant="danger" onClick={()=>{SetCnt(0)}}>Reset</Button>

//     </div>
//     </>
//   )
// }
// export default State;


// ...........................................................................

// <------******* NO DEPENDENCY PASSED IMP:=>  RUNS ON EVERY RENDER  ********----->
// import { useState,useEffect } from "react";
// const App = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 3000);
//   });
//   return (
//     <div>
//       <h1>hook example{count}</h1>
//     </div>
//   );
// };
// export default App;

// <------******* AN EMPTY ARRAY IMP:=> RUNS ONLY ON THE FIRST RENDER  ********----->

// import { useState, useEffect } from "react";

// const App = () => {
//   const [ count,setCount] = useState  (0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 5000);
//   }, []);
//   return <div>
//     <h1>hook {count}</h1>
//   </div>;
// };
// export default App;

//............................................................................


// import { useState,useEffect } from "react";

// const App=()=>{


//   const [count,setCount] =useState(0);
//   const [multi,setMulti] =useState(0);

// useEffect(()=>{

//   setMulti(count*2)

// },[count])
           
//   return(
//     <>
    
//     <h1>Count :  {count}</h1>

//     <h1>My count :  {multi}</h1>

//     <button onClick={()=>{setCount(count+1)}}> click me</button>
    
//     </>
//   )
// }
// export default App;     
///..............................................................................

//....***increament counts using usetate***..........................


// import { useState } from "react";
// const App=()=>{

//   const[count,setCount]=useState(0)

//   const myInc=()=>{
//     setCount(count+1)
//   }



//   return(
//     <>
    
//     <h1>useEffect Hook!!!{count}</h1>

//     <button onClick={myInc}>click</button>
    
//     </>
//   );
// };
// export default App;



//....................****lets change the color of the text by using usestae**..........

// import { useState } from "react";



// const Usestate=()=>{

//   const[color,SetColor]=useState("red")

//   return(
//     <>
    
//     <h1 style={{color:color}}>welcome to the useState!!!!{color} </h1>
//     <button onClick={()=>{SetColor("green")}}>change 1</button>
//     <button onClick={()=>{SetColor("blue")}}>change 2</button>
//     <button onClick={()=>{SetColor("brown")}}>change 3</button>
//     <button onClick={()=>{SetColor("orange")}}>change 4</button>
    
//     </>
//   )
// };

// export default Usestate;


//......***lets creat counter App **............////


// import { useState } from "react";
// import Button from 'react-bootstrap/Button';

// const App=()=>{
// const[count,setCount]=useState(0)
// const myInc=()=>{
//   setCount(count+1)
// }
// const myDec=()=>{
//   if(count<1){
//     alert(' count not less then zero')
//   }
//   else
//   {setCount(count-1)}
  
// }
//   return (
//     <>

//     <h1>Counter App</h1>
//     <Button variant="primary" onClick={myInc}>Primary</Button>
//     <h1>Count :{count}</h1>
//     <Button variant="primary" onClick={myDec}>Primary</Button>
//     <Button variant="danger" onClick={()=>{setCount(0)}}>Reset</Button>
    
//     </>
//   )
// }
// export default App;


//..........******useeffect count handling.....................**************>>>>>>>>>>>>>>>>>>>>>>
// import { useState,useEffect } from "react";

// const App = ()=>{

// const[count,setCount]=useState(0)

// useEffect(()=>{
//     setTimeout(() => {
//         setCount(count+1)
//     },2000);
   
 
// })

//     return(

//         <>
//         <h1>Hello , Welcome!!!! {count}</h1>
//         </>
//     );
// };
// export default App;





//.........................................multiple render.............................................#

// import { useState,useEffect } from "react";
// const App =()=>{
//     const[count,setCount]=useState(0)
//     const[multi,setMulti]=useState(0)
//     useEffect(()=>{                       //............doubt......................
//         setMulti(count*2)
//     },[count])


  
//     return(
//         <>
//         <h1>Count one : {count}</h1>
//         <h1>Count two : {multi}</h1>
//         <button onClick={()=>{setCount(count+1)}}>click</button>
//         </>
//     )
// };
// export default App;






// import { useState,useEffect } from "react";
// const App =()=>{
// const[count,setCount]=useState(0)

// useEffect(()=>{
//    setTimeout(()=>{
//     setCount(count+1)
//    },1000)

// },[]);

//     return(
//         <>
//         <h1>Wecome!!!{count}</h1>
        
//         </>
//     )
// };
// export default App;





///..............................................................aplication form...................................//


// import { useState } from "react";

// const App =()=>{
//     const[name,setName]=useState("")
//     const[city,setCity]=useState("")
//     const[rollno,setRollno]=useState("")
//     const handlesubmit=()=>{
//         alert(`My name is ${name}: My roll no is ${rollno}: My city is ${city}`)
//         console.log({name},{city},{rollno})
//     }



//     return(
//         <>
//         <h1>Application Form!!!</h1>
//         <br />
//         Enter Name : <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
//         <br />
//         Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//         <br />
//         Enter Roll No : <input type="text" value={rollno} onChange={(e)=>(setRollno(e.target.value))}/>
//         <br />
//         <button onClick={handlesubmit}>Click!!</button>
        
//         </>
//     )
// }
// export default App;



// import { useState } from "react";
// import axios from "axios";

// const App =()=>{
//     const[input,setInput]=useState({});
//     const handleinput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values,[name]:value}));
//         console.log(input);
    
      

         
//     }
//     const handleSubmit=async()=> {
//         let api="http://localhost:3000/Student";
//         const response = await axios.post(api,input);
//         console.log(response);
//         alert("data inserted successfully")                    
//       }

//     return(
//         <>
//         <h1>application form</h1>
//         roll no : <input type="text" name="roll no" onChange={handleinput} />
//         <br />
//         name : <input type="text"  name="name"  onChange={handleinput} />
//         <br />
//         city : <input type="text"  name="city"  onChange={handleinput} />
//         <br />
//         fees : <input type="text"  name="fees"  onChange={handleinput} />
//         <br />
//         <button onClick={handleSubmit}>save!!!</button>
        
//         </>
//     )             
// };
// export default App;

//....................................................................................................
// import { useState } from "react"


// const App =()=>{
//     const[input,setInput]=useState({});
//     const handleinput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values,[name]:value}));
//         console.log(input);
//     }
//     return(
//         <>
//         <h1>Form Handle Application</h1>
//         <br />
//         Enter roll no : <input type="text" name="rollno" onChange={handleinput}/>
//         <br />
//         Enter name : <input type="text" name="name"  onChange={handleinput}/>
//         <br />
//         Enter city : <input type="text" name="city"  onChange={handleinput}/>
//         <br />
//         Enter fees : <input type="text" name="fees"  onChange={handleinput}/>
//         <br />
//         <button >submit</button>
//         </>
//     )
// }
// export default App;


// import { BrowserRouter,Routes,Route, } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import Insert from "./insert";
// import Display from "./Display";

// const App=()=>{
//     return(
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Layout/>}>
//                     <Route index element={<Home/>}/>
//                     <Route path="home" element={<Home/>}/>
//                     <Route path="insert" element={<Insert/>}/>
//                     <Route path="display" element={<Display/>}/>

//                     </Route>
//                 </Routes>
//             </BrowserRouter>
             

//         </>
//     )
// }
// export default App;













// import { useState ,createContext} from "react";
// import Comp1 from "./comp1";

// const mycontext=createContext();


// const App = ()=>{
//   const[user ,setUser]=useState("Mr.Viplove Sana");

//   return(
//       <>
   
//       <h1>
//         Welcome!!!  {user}
//       </h1>
//       <mycontext.Provider value={{user,setUser}}>
//         <Comp1/>

//       </mycontext.Provider>
      
      
      
//       </>
//   )
// }
// export default App;
// export {mycontext}

//.................................................................................................///



import Cybrom from "./Cybrom";
const App=()=>{
  return(
    <>
    <h1>Welcome!!!</h1>
    <Cybrom/>
    </>
  )
}
export default App;