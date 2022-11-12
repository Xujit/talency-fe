 import React from 'react'
 
 function forgot() {
   return (
    <div>
    <form action="" method="post">
    <div className="page-title">Forgot Password</div>
    <div className="page-tagline">Enter the email address associated with your account. We'll send you a link to reset your password.</div>
    <div className="ta-form-group">
      <input
        type="text"
        className="ta-input"
        placeholder="Email"
      />
    </div>
      <div className="ta-form-group m-t-5">
      <button type="submit" className="cta-primary">
        <div>Submit</div>
      </button>
    </div>
    </form>
  </div>
    
   )
 }
 
 export default forgot