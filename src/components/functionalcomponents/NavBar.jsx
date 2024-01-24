import "../css/NavBar.css"
import{Link}from "react-router-dom";
const NavBar=()=>{
return (
    <ol>
        <li><Link to="/Home">HOME</Link></li>
        <li><Link to="/ABOUT">ABOUT</Link></li>
        <li><Link to="/Login">LOGIN</Link></li>
        <li><Link to="/Experience">EXPERIENCE</Link></li>
       
    </ol>
)
}
export default NavBar;