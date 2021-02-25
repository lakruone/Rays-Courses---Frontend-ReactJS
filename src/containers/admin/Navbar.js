import React, {Component} from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Navbar.css';
import Logo from '../img/logo.png'

class Navbar extends Component {
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
            <li className="hov"> <NavLink className="nav-link" to="/courses" exact> Courses</NavLink> </li>
            <li className="hov"> <NavLink className="nav-link" to="/admin" exact>Logout</NavLink> </li>

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