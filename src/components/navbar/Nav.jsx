import React from 'react'
import './NavStyle.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

  return (
    
      <div className="logo">
        <h1>
          EMA<span>ARA</span>
        </h1>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="services">Services</Link></li>
          {/* <li><Link to="contact">Contact</Link></li> */}
        </ul>
        <i className=" fa fa-bars menu" onClick={handleNav}></i>        
      </div>
    
  );
}

export default Nav