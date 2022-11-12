import React from 'react'
 
 function verify() {
   return (
    <div>
    <form action="" method="post">
    <div className="page-title">Verify mobile number</div>
    <div className="page-tagline">We sent an SMS to "9090909090"</div>
    <div className="ta-form-group">
      <input
        type="text"
        className="ta-input"
        placeholder="Enter the code"
      />
    </div>
    <div className="text-right m-t-n2 m-b-5">
      haven't received the code?
      <a className="primary-link" href="#"> Resend</a>
    </div>
    <div className="ta-form-group">
      <button type="submit" className="cta-primary">
        <div>Verify</div>
      </button>
    </div>
    </form>
  </div>
   )
 } 
 export default verify