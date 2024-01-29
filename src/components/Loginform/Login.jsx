import React from "react";
import '../Loginform/Login.css'
import { Link } from "react-router-dom";
const Login=()=>
{ 
    return(
        <div >
            <form>
                <br></br>       
                 <table classname="Lp">
                 <br></br>  
                        <tr>
                            <label>Email:</label>
                            <td><input type="text" placeholder="Enter your mail" required></input></td>
                        </tr>
                        <tr>
                            <label>Password:</label>
                            <td><input type="text" placeholder="Enter your password" required></input></td>
                        </tr> 
               
          <tr>  <button classname="login-btn" type="submit">Login</button>
                          <Link to="/Signup">
                                <button className="login-btn">Sign up</button>
                            </Link></tr> 
             <br></br>
             </table> 
             <br></br>   
            </form>
        </div>
    )
    }
export default Login;