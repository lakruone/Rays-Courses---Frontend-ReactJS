import React, {Component} from 'react';
import AuthService from '../../../auth/AuthService';
import Navbar from '../Navbar';


class NewCourse extends Component {

  constructor(props) {
      super(props)

      this.state = {
          auth : true,
      }

      this.Auth = new AuthService();
    }

  componentDidMount(){
    if(this.Auth.loggedIn() === false){
        this.props.history.replace('/admin');
      }
  }

  render (){

    return (
      <div>
        <Navbar auth={this.state.auth}/>

        <h1>Add New Course</h1>
      </div>
    )
  }
}

export default NewCourse;
