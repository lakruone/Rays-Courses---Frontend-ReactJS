import React, { useState } from 'react';
import AuthService from '../../../auth/AuthService';

import Navbar from '../Navbar';
import './Login.css';
import LoginImg from '../../img/login.png';


const Login = (props) => {


  const Auth = new AuthService();

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({})



  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let inputData  = {...formData};
    inputData[name] = value;

    setFormData(inputData)
  }

  const validateLoginForm = (e) => {
    let errors = {};
 
    if (formData.username === undefined || formData.username === "") {
      errors.username = "Username cannot be empty";
    }

    if (formData.password === undefined || formData.password === "") {
      errors.password = "Password cannot be empty";
    }

    if (errors.username === undefined && errors.password === undefined) {
      return true;
    } else {
      return errors;
    }
  }

  const login = (e) => {

    e.preventDefault();

    let error = validateLoginForm();

    if (error === true) {
      Auth.login(formData.username, formData.password)
        .then(response => {
          if (response.result === false) {
    
            setErrors({ credentials: "Invalid credentials" })
          } else {
            props.history.push('/admin/dashboard');
          }
        });

    } else {
  
      setErrors(error)
    }
  }



  return (

    <div>
      <Navbar auth={false} />

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={LoginImg} alt="IMG" />
            </div>

            <form onSubmit={login} className="login100-form validate-form">
              <span className="login100-form-title">
                Admin Login
              </span>

              {errors.credentials &&
                <div className="error-message">{errors.credentials} </div>}

              <div className="wrap-input100 validate-input">
                {errors.username &&
                  <div className="error-message">{errors.username} </div>}
                <input onChange={handleInputChange} className="input100" type="text" name="username" placeholder="Username" />
              </div>

              <div className="wrap-input100 validate-input">
                {errors.password &&
                  <div className="error-message">{errors.password} </div>}
                <input onChange={handleInputChange} className="input100" type="password" name="password" placeholder="Password" />
              </div>

              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Login
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );

}


export default Login;
