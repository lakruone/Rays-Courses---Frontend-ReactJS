import React, { Component } from 'react';
import AuthService from '../../../auth/AuthService';
import axios from '../../../axios';

import Navbar from '../Navbar';

class Dashboard extends Component {

  constructor(props) {
      super(props)

      this.state = {
          auth : true,
          token: null

      }
      this.Auth = new AuthService();
  }


  componentWillMount(){
    if(this.Auth.loggedIn()===false){
        this.props.history.replace('/admin');
      }
      this.setState({
        token:this.Auth.getToken()
      })
  }

  componentDidMount(){
    const {token} = this.state;

    axios.get('/admin/courses', {
      headers: {
       'authorization': "bearer "+ token
     }
    })
     .then(response => {
       console.log(response + "response from axios req");
     });
  }

  render (){

    return(
      <div>
        <Navbar auth={this.state.auth}/>

        <h1>Dashboard</h1>
      </div>
    );
  }

}

export default Dashboard;
