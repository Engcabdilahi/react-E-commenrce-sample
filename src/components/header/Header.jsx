import React from 'react'
import './HeaderStyle.css'
import { useState } from 'react';
import { useSelector } from "react-redux";

const Header = () => {
  
  const data = useSelector((state) => state.data);


 
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="container">
      <div className="logo">
        <h1>
          EMA<span>ARA</span>
        </h1>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <i className=" fa fa-bars menu" onClick={handleNav}></i>

        

        <i className=" fa fa-shopping-cart cart">
          <div className="tiro">  {data.value}</div>
        </i>
        
      </div>
      <div className="content">
        <h1>
          Kusoo Dhawow <span>EMAARA</span> Fashion
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          consequatur ipsa hic quibusdam nam, est distinctio laudantium maiores
          at in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          quam debitis aspernatur eius maxime velit earum, aperiam autem
          cupiditate ullam voluptatem sit a voluptatibus molestias aliquam in,
          ad dolores id. error non dolorum! Inventore maxime, quo odio harum
          asperiores ullam.
        </p>
      </div>
    </div>
  );
}

export default Header