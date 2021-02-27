import React from 'react';
import { NavLink } from 'react-router-dom';


import './Navbar.css';
import Logo from '../img/logo.png'


const navbar = (props) => (
  <header>
    <div className="logo-container">
      <img src={Logo} alt="logo"/>
      <h4>RAYS COURSES</h4>
    </div>

    <nav>
      <ul>
          <li className="hov"> <NavLink className="nav-link" to="/" exact>Home</NavLink> </li>
      </ul>
    </nav>
  </header>
);

export default navbar;
