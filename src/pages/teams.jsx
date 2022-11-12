import React from 'react'
import { Link } from 'react-router-dom';

function teams() {
  return (
    <div>
      <div className="page-title">Teams</div>
    <div className="row align-items-center">
 <div className='col-sm-4'>
  <ul className="filter-tab">
        <li><a href="#">Internal</a></li>
        <li><a href="#">External</a></li>
        <li className="active"><a href="#">All</a></li>
      </ul>
 </div>
 <div className="col-sm-4 text-center">
   <div className="ta-input-search">
 <input type="text" placeholder="Search by name, department" className="ta-input input-search" />
  </div></div>
  <div className='col-sm-4 text-right'>
  <Link className="text-cta cta-nrml cta-primary" to="../invitemember">
  <div>Invite Team Member</div>
     </Link>
  </div>
 </div>
   
<div className="memb-list m-y-7">
<div className="memb-item">
 <div className="memb-img">
     <img src="images/default.svg" width="60px" alt="" />
 </div>
<div className="memb-info">
 <div className="memb-name">Mitchell Stark</div>
 <div className="memb-dept">Department Name</div>
 <div className="memb-role">Recruiter</div>
</div>
</div>   

<div className="memb-item">
<div className="memb-img">
 <img src="images/default.svg" width="60px" alt="" />
</div>
<div className="memb-info">
<div className="memb-name">Eva Benson</div>
<div className="memb-dept">External</div>
<div className="memb-role">Recruiter</div>
</div>
</div>  
<div className="memb-item">
<div className="memb-img">
<img src="images/default.svg" width="60px" alt="" />
</div>
<div className="memb-info">
<div className="memb-name">Kevin Lowry</div>
<div className="memb-dept">Department Name</div>
<div className="memb-role">Recruiter</div>
</div>
</div>   

<div className="memb-item">
<div className="memb-img">
<img src="images/default.svg" width="60px" alt="" />
</div>
<div className="memb-info">
<div className="memb-name">Eva Benson</div>
<div className="memb-dept">External</div>
<div className="memb-role">Recruiter</div>
</div>
</div>  
<div className="memb-item">
<div className="memb-img">
<img src="images/default.svg" width="60px" alt="" />
</div>
<div className="memb-info">
<div className="memb-name">Kevin Lowry</div>
<div className="memb-dept">Department Name</div>
<div className="memb-role">Recruiter</div>
</div>
</div>  
<div className="memb-item">
<div className="memb-img">
<img src="images/default.svg" width="60px" alt="" />
</div>
<div className="memb-info">
<div className="memb-name">Mitchell Stark</div>
<div className="memb-dept">Department Name</div>
<div className="memb-role">Recruiter</div>
</div>
</div>   
<div className="memb-item">
<div className="memb-img">
<img src="images/default.svg" width="60px" alt="" />
</div>
<div className="memb-info">
<div className="memb-name">Kevin Lowry</div>
<div className="memb-dept">Department Name</div>
<div className="memb-role">Recruiter</div>
</div>
</div>  
</div>    
</div>
  )
}

export default teams