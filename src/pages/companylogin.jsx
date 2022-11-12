import React from 'react'
import { Link } from 'react-router-dom';
function login() {
  return (
    
  <div>
  
   <form action="" method="post">
   <div className="page-title">Sign In</div>
   <div className="page-tagline">Welcome back to your account.</div>
   <div className="ta-form-group">
     <input type="text" className="ta-input" placeholder="Email" />
   </div>
   <div className="ta-form-group">
     <input type="password" className="ta-input" placeholder="Password" />
   </div>
   <div className="ta-form-group text-right">
     <Link className="font-link" to="/forgotpassword">Forgot Password?</Link>
   </div>
   <div className="ta-form-group">
     <button type="submit" className="cta-primary">
       <div>Sign In</div>
     </button>
   </div>
   <div className="text-center">
     New to Talency? 
     <Link className="primary-link" to="/companysignup"> Create an account.</Link>
   </div>
   </form>
 </div>
  )
}

export default login