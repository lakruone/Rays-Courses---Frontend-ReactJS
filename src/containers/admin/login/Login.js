import React, { Component } from 'react';

import Navbar from '../Navbar';

class Login extends Component {
  state = {
    auth:false
  }

  render () {

    return (

      <div>
        <Navbar auth={this.state.auth} />
        <h2>Admin Login</h2>
      </div>
    );
  }
}


export default Login;
