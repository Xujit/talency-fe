import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Pushmenu from "../components/pushmenu";
import Contentwrapper from "../components/contentwrapper";

export default function Adminmaster() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <main>
      <a onClick={handleToggle} className={`menu-toggler ${isActive ? " " : "is-active"}`}
      > <span class="fi fi-rr-angle-small-right"></span>
      </a>
      <Sidebar />
      <div className={`main-wrapper ${isActive ? "" : "is-shrink"}`}>
<Pushmenu />
<Contentwrapper />
  </div>
         

    </main>
  );
}
