

// const App=()=>{
//   return(
//     <>
//     <>
//     <h1>welcome to bhopal</h1>
//     <h1>welcome back</h1>

// import Cybrom from "./component1";

//   </>
  

//   <p>i love react</p>
//   </>
//   )
// }

// export default App;
  
 

// const App=()=>{
//   return(
//     <>
//     Enter name : <input type="text" />

//     <br />
//     Enter city : <input type="text" />

//   </>
//   )
// }

// export default App;

// import Header from "./Header";
// import Data from "./Data";
// import Footer from "./Footer";
// const App=()=>{
//   return(
//     <>
//     <h1>welcome to cybrom</h1>
//     <Header/>
//     <Data/>
//     <Footer/>


//   </>
//   )
// }

// export default App;





// import Cybrom from "./component1";
// import Cybromm from "./component2";
// import Cybrommm from "./component3";

// const app = ()=>{
//   return(
//     <>
//     <h1>this is my react js</h1>
//     <Cybrom/>
//     <Cybromm/>
//     <Cybrommm/>

//     </>
//   )
// }

// export default app;



//.............................................................................................




// import Collage from "./Collage";
// const name ="RGPV"
// const seats ="454"
// const fees ="23000"
// import Cybrom from "./Cybrom";
// const collage = {
//     name :"RGPV", 
//     fees : 4500,
//     city : "Bhopal",
//     subject : "python"
// }   

//..............................................................................................................




// const Data = ()=>{
//   const Subject = ["html","css","python","cpp","react"];
//   const ans = Subject.map((key)=>{
//     return(
//       <>
//       <option>{key}</option>
//       </>
//     )
//   });
//   return(
//   <>
//  <h1 align="center">welcome to cybrom</h1>
//  <select>{ans}</select>
//   </>
//   )
// }
// export default Data;






//..........................................................................................................







// const Student = [
//   {
//     "rollno":124,
//     "name":"viplove",
//     "city":"bhopla",
//     "fees":5467567

// },
// {
//   "rollno":124,
//   "name":"jkdbcj",
//   "city":"bhopla",
//   "fees":5467567

// },
// {
//   "rollno":124,
//   "name":"vbjkbcjk",
//   "city":"bhopla",
//   "fees":5467567

// },
// {
//   "rollno":124,
//   "name":"shubham",
//   "city":"bhopla",
//   "fees":5467567

// },
// {
//   "rollno":127,
//   "name":"ankit",
//   "city":"bhopal",
//   "fees":5467567

// },
// {
//   "rollno":798,
//   "name":"rohan",
//   "city":"indore",
//   "fees":5467567

// },
// ]


// const ans = Student.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.rollno}</td>
//       <td>{key.name}</td>
//       <td>{key.city}</td>
//       <td>{key.fees}</td>


//     </tr>
    
//     </>
//   )

  
// })

// const Data = ()=>{
 
//   return(
//   <>
//  <h1 align="center">welcome to cybrom</h1>

//  <>
 
//  <table border="2" width="600" height='400'>
//   <tr>
//     <th>rollno</th>
//     <th>name</th>
//     <th>city</th>
//     <th>fees</th>
    
//   </tr>
//   {ans}
//  </table>
//  </>

//   </>
//   )
// }
// export default Data;


//...................................................................................................






// const Data = ()=>{
//   const Subject = ["html","css","python","cpp","react"];
//   const ans = Subject.map((key)=>{
//     return(
//       <>
//       <option>{key}</option>
//       </>
//     )
//   });
//   return(
//   <>
//  <h1 align="center">welcome to cybrom</h1>
//  <select>{ans}</select>
//   </>
//   )
// }
// export default Data;





//.................................................................................................



import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";



const Hello = ()=>{

  const ans = EmpData.map((key)=><EmpDesign
  
  no={key.Empno}
  nm={key.name} 
  des={key.designation}
  sal={key.salary} 
  />



  )
  return(
<>
<h1 align="center">Welcome viplove!!!</h1>

<table border="1" width="600" height="400">
  <tr>
    <th>Emp No</th>
    <th>Emp Name</th>
    <th>Emp Designation</th>
    <th>Emp Salary</th>
  </tr>
  {ans}
</table>


</>

  )
}
export default Hello;
