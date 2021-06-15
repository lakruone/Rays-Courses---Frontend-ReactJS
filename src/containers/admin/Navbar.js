import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../../auth/AuthService';


import './Navbar.css';
import Logo from '../img/logo.png'

const Navbar = (props) => {

  const Auth = new AuthService();

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
    window.location.replace('/admin');

  }


  if (props.auth) {
    return (
      <header>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <h4>RAYS COURSES</h4>
        </div>
        <nav>
          <ul>
            <li className="hov"> <NavLink className="nav-link" to="/admin/dashboard" exact> Courses</NavLink> </li>
            <li className="hov"> <NavLink className="nav-link" to="/" exact onClick={logout} >Logout</NavLink> </li>

          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <h4>RAYS COURSES</h4>
        </div>
        <nav>
          <ul>
            <li className="hov"> <NavLink className="nav-link" to="/student" exact >I am a Student</NavLink> </li>

          </ul>
        </nav>
      </header>
    );
  }


}


export default Navbar;
