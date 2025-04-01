import {Link ,Outlet } from "react-router-dom";

const Layout =()=>{
    return(
        <>
        <nav>
        <Link to="home">Home</Link>
        <Link to="about">About Us</Link>
        <Link to="contact">Contact Us</Link>
        <hr size="4" color="red"/>
        </nav>
        <Outlet/>

        <hr size="4" color="red"/>
        <footer>www.mycompany.com all right reserved.</footer>

        </>     
    )
}

export default Layout;