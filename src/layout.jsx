

import { Link,Outlet } from "react-router-dom";
import TopNav from "./TopNav";

const Layout=()=>{
    return(
        <>
          <TopNav/>

{/* <hr size="5" color="red"/> */}

<Outlet/>

{/* <hr size="5" color="red"/> */}

<footer style={{display:"flex",justifyContent:"center",height:"70vh",alignItems:"end"}}>www.MyCompany.com  | All rights reserved.</footer>

        </>
    )
}
export default Layout;