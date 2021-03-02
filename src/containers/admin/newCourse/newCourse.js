import React, {Component} from 'react';
import AuthService from '../../../auth/AuthService';
import Navbar from '../Navbar';
import axios from '../../../axios';

import './newCourse.css';


class NewCourse extends Component {

  constructor(props) {
      super(props)

      this.state = {
          auth : true,
          courseDetails : {}
      }

      this.Auth = new AuthService();
    }

  componentDidMount(){
    if(this.Auth.loggedIn() === false){
        this.props.history.replace('/admin');
      }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let {courseDetails} = this.state;
    courseDetails[name] = value;

    this.setState({
      courseDetails : courseDetails,
      error : false
    });
  }


  validateForm = () => {
    let errors = false;
    const {courseDetails} = this.state;

    if( courseDetails.courseName===undefined || courseDetails.courseName===""
        ||  courseDetails.courseDescription===undefined || courseDetails.courseDescription===""
        ||  courseDetails.universityName===undefined || courseDetails.universityName===""
        ||  courseDetails.country===undefined || courseDetails.country===""
      ){
        errors=true;
      }

      return errors;
  }

  saveCourse = (e) => {
    e.preventDefault();

    let errors = this.validateForm();

    const {courseDetails} = this.state;
    const token = this.Auth.getToken();

    if(errors===false){
      axios.post('/admin/add-new-course',courseDetails, {
        headers: {
          'Content-Type' : 'application/json',
          'authorization' : 'bearer ' + token
        }
      }).then( res => {
        console.log(res);
        // window.location.reload();

        if(res.data.msg==='success'){
          this.setState({
            success:true
          });
        }else{
          this.setState({
            success:false
          });
        }

      });
    }else{
      this.setState({
        error : true
      });
    }

  }



  render (){
    const {error,success} = this.state;

    return (
      <div>
        <Navbar auth={this.state.auth}/>
          <h1>Add New Course</h1>

            <div className="Cover">

              {error &&
              <div className="error-message">Some fields are empty </div>}
              {success===true &&
              <div className="success-message"> Course Added Successfully </div> }

              {success===false &&
              <div className="error-message"> Error saving the course  </div> }



              <div className="wrapper">
                <label className="Label" >Course Name</label>
                <input type="text" onChange={this.handleInputChange}  name="courseName" />
              </div>

              <div className="wrapper">
                <label className="Label" >Course Description</label>
                <textarea rows="3" onChange={this.handleInputChange} name="courseDescription" />
              </div>

              <div className="wrapper">
                <label className="Label" >University Name</label>
                <input type="text" onChange={this.handleInputChange} name="universityName" />
              </div>

              <div className="wrapper">
                <label className="Label" >Country</label>
                <input type="text" onChange={this.handleInputChange} name="country" />
              </div>

              <div className="save-course">
                <button type="submit" onClick={this.saveCourse} className="save-course-btn">
                  Save Course
                </button>
              </div>

            </div>
      </div>
    )
  }
}

export default NewCourse;
