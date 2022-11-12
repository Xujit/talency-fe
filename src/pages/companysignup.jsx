import React from 'react'
import { Link } from 'react-router-dom';

function companysignup() {
  return (
    <div>
    <form action="" method="post">
    <div className="page-title">Sign up Now!</div>
    <div className="page-tagline">
      Manage your hiring, onboarding, and workflows in one place.
    </div>
    <div className="ta-form-group">
      <input type="text" className="ta-input" placeholder="Email" />
    </div>
    <div className="ta-form-group">
      <input type="text" className="ta-input" placeholder="Mobile Number" />
    </div>
    <div className="ta-form-group">
      <input type="password" className="ta-input" placeholder="Password" />
    </div>
    <div className="ta-form-group">
      <input type="checkbox" className="ta-input" />
     <div className="checkbox-label">
      By signing up, you are agreeing to our
      <Link className="primary-link" target="_blank" to="/terms"> terms</Link> and
      acknowledge reading our
      <Link className="primary-link" target="_blank" to="/privacy"> privacy notice</Link>
      
      <a href="#" target="_blank" className="primary-link"></a>.
     </div>
    </div>
    <div className="ta-form-group">
      <button type="submit" className="cta-primary"> 
        <div>Sign up for Free</div>
      </button>
    </div>
    <div className="text-center">
      Already have a Talency account?
      <Link className="primary-link" to="/companylogin"> Sign in</Link>
    </div>
    </form>
  </div> 
  )
}

export default companysignup