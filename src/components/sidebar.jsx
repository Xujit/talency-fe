 import React from 'react';
 import { Link, Outlet } from 'react-router-dom';

 function Sidebar() {
   return (
    <nav className="side-bar">
    <div className="logo"> 
      <img src="images/logo.svg" height="42px" alt="talency" />
    </div>
    <ul className="menu-nav">
      <li>
         <Link to="">
          <span className="fi fi-rr-apps"></span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="fi fi-rr-briefcase"></span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="fi fi-rr-mode-portrait"></span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="fi fi-rr-calendar"></span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="fi fi-rr-envelope-download"></span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="fi fi-rr-chart-histogram"></span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="fi fi-rr-user-add"></span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="fi fi-rr-chart-tree"></span>
        </Link>
      </li>
    </ul>
    <ul className="menu-nav">
      <li>
         <Link to="">
          <span className="fi fi-rr-settings"></span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="fi fi-rr-bell"></span>
          <span className="notify-count">2</span>
        </Link>
      </li>
      <li>
         <Link to="">
          <span className="profile-img">SS</span>
        </Link>
      </li>
    </ul>
  </nav>
   )
 }
 
 export default Sidebar