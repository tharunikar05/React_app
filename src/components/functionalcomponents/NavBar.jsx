import "../css/NavBar.css"
import{Link}from "react-router-dom";
const NavBar=()=>{
return (
    <ol>
        <li><Link to="/Home" class="Link">HOME</Link></li>
        <li><Link to="/ABOUT" class="Link">ABOUT</Link></li>
        <li><Link to="/Login" class="Link">LOGIN</Link></li>
        <li><Link to="/Ref" class="Link">USEREF</Link></li>
        <li><Link to="/Memo" class="Link">USEMEMO</Link></li>
        <li><Link to="/Callback" class="Link">CALLBACK</Link></li>
        <li><Link to="/Signup" class="Link">Signup</Link></li>
    </ol>
)
}
export default NavBar;