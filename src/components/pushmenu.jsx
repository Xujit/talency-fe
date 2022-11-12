 import React from 'react'
 import { Link, Outlet } from 'react-router-dom';
 function pushmenu() {
   return (
    <div className='push-menu'>
      
      <ul>
        <li className='list-header'>
        Team Members
        </li>
        <li> 
      <Link to="departments">  
      <span className="fi fi-rr-angle-small-right"></span>
        Departments
        </Link>
          </li>
          <li>
          <Link to="teams">  
      <span className="fi fi-rr-angle-small-right"></span>
        Teams
        </Link>
          </li>
      </ul>

    </div>
    )
 }
 
 export default pushmenu