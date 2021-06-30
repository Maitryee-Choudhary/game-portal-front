import React from 'react';
import "../components/Login.css";
const Login = () =>{
 return(
     <>
       <div className="register-section">
         <div class="heading">
           <h1>Login</h1>
           <span class="cross-icon"><i class="far fa-times"></i></span>
           </div>
           <div className="textbox">
             <input type="text" placeholder="Username"  required />
           </div>
           <div className="textbox">
             <input type="password" placeholder="Password"  required />
           </div>
           <button className="register-btn glow-on-hover">Register</button>
       </div>
     </>
 )
}

export default Login;


