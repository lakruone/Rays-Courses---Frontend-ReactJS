import React, {Component} from 'react';
import {NavLink } from 'react-router-dom';
import AuthService from '../../auth/AuthService';


import './Navbar.css';
import Logo from '../img/logo.png'

class Navbar extends Component {

  constructor(props) {
      super(props)

      this.Auth = new AuthService();
  }

  logout = (e)=>{
    e.preventDefault();
    this.Auth.logout();
    window.location.replace('/admin');

  }


  render () {

  if(this.props.auth){
    return (
      <header>
        <div className="logo-container">
          <img src={Logo} alt="logo"/>
          <h4>RAYS COURSES</h4>
        </div>
        <nav>
          <ul>
            <li className="hov"> <NavLink className="nav-link" to="/admin/dashboard" exact> Courses</NavLink> </li>
            <li className="hov"> <NavLink  className="nav-link" to="/admin" exact onClick={this.logout} >Logout</NavLink> </li>

          </ul>
        </nav>
      </header>
    );
  }else{
    return (
      <header>
        <div className="logo-container">
          <img src={Logo} alt="logo"/>
          <h4>RAYS COURSES</h4>
        </div>
        <nav>
          <ul>
          </ul>
        </nav>
      </header>
    );
  }


  }
}


export default Navbar;
