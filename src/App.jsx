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


import Cybrom from "./Cybrom";

const App = ()=>{
  return(
      <>
   
      <h1 className="data">Welcome to cybrom</h1>
      <Cybrom/>
      </>
  )
}
export default App;