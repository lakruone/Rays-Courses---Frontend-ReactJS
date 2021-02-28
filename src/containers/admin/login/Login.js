import React, { Component } from 'react';
import AuthService from '../../../auth/AuthService';

import Navbar from '../Navbar';
import './Login.css';
import LoginImg from '../../img/login.png';

class Login extends Component {

  constructor(props) {
      super(props)

      this.state = {
          auth : false,
          formData: {}, // Contains login form data
          errors: {}, // Contains login field errors
      }

      this.Auth = new AuthService();
  }


  handleInputChange = (event) => {
         const target = event.target;
         const value = target.value;
         const name = target.name;

         let { formData } = this.state;
         formData[name] = value;

         this.setState({
             formData: formData
         });
     }

     validateLoginForm = (e) => {

         let errors = {};
         const { formData } = this.state;

         if (formData.username===undefined || formData.username==="") {
             errors.username = "Username cannot be empty";
         }

         if (formData.password===undefined || formData.password==="") {
             errors.password = "Password cannot be empty";
         }

         if (errors.username===undefined && errors.password===undefined) {
             return true;
         } else {
             return errors;
         }
     }

     login = (e) => {

         e.preventDefault();

         let errors = this.validateLoginForm();

         const {formData} = this.state;


         if(errors === true){
          this.Auth.login(formData.username, formData.password)
          .then(response => {
            if(response.result === false){
              this.setState({
                errors: {credentials: "Invalid credentials" }
              });
            }else{
              this.props.history.push('/admin/dashboard');
            }
          });

         } else {
             this.setState({
                 errors: errors
             });
         }
     }


  render () {

    const { errors } = this.state;

    return (

      <div>
        <Navbar auth={this.state.auth} />



          <div className="limiter">
        		<div className="container-login100">
        			<div className="wrap-login100">
        				<div className="login100-pic js-tilt" data-tilt>
        					<img src={LoginImg} alt="IMG"/>
        				</div>

        				<form onSubmit={this.login} className="login100-form validate-form">
        					<span className="login100-form-title">
        						Admin Login
        					</span>

                  {errors.credentials &&
                  <div className="error-message">{errors.credentials} </div>}

        					<div className="wrap-input100 validate-input">
                    {errors.username &&
                    <div className="error-message">{errors.username} </div>}
        						<input onChange={this.handleInputChange} className="input100" type="text" name="username" placeholder="Username"/>
        					</div>

        					<div className="wrap-input100 validate-input">
                    {errors.password &&
                    <div className="error-message">{errors.password} </div>}
        						<input onChange={this.handleInputChange} className="input100" type="password" name="password" placeholder="Password"/>
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
}


export default Login;
