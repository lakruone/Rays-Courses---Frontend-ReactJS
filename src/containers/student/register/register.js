import React, {Component} from 'react';

import Navbar from '../Navbar';
import axios from '../../../axios';
import './register.css';

class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      course:[],
      studentDetails : {}
    }
  }

  componentDidMount() {
    const data = this.props.location.state;

    this.setState({
      course:data
    });

  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let {studentDetails} = this.state;
    studentDetails[name] = value;

    this.setState({
      studentDetails : studentDetails
    });
  }

  validateForm = () => {
    let errors = false;
    const {studentDetails} = this.state;

    if( studentDetails.firstName===undefined || studentDetails.firstName===""
        ||  studentDetails.lastName===undefined || studentDetails.lastName===""
        ||  studentDetails.email===undefined || studentDetails.email===""
        ||  studentDetails.contactNumber===undefined || studentDetails.contactNumber===""
      ){
        errors=true;
      }

      return errors;
  }

  registerCourse = (e) => {
    e.preventDefault();

    let errors = this.validateForm();

    let {studentDetails,course} = this.state;
    studentDetails["courseId"] = course.course_id;

    if(errors===false){
      axios.post('/student/register-course',studentDetails)
      .then( res => {
        if(res.data.msg==='success'){
          this.props.history.push('/');
        }
      });
    }else{
      this.setState({
        error : true
      });
    }

  }


  render () {

    let {course,error} = this.state;

    return(
      <div>
        <Navbar/>
        <h1>{course.course_name}</h1>

        <div className="Cover">

          <div className="Header">
            <div className="university">{course.university_name}</div>
            <div className="country">{course.country}</div>
          </div>

          {error &&
          <div className="error-message">Some fields are empty </div>}

          <div className="wrapper">
            <label className="Label" >First Name</label>
            <input type="text" onChange={this.handleInputChange}  name="firstName" />
          </div>

          <div className="wrapper">
            <label className="Label" >Last Name</label>
            <input type="text" onChange={this.handleInputChange}  name="lastName" />
          </div>

          <div className="wrapper">
            <label className="Label" >Email</label>
            <input type="text" onChange={this.handleInputChange}  name="email" />
          </div>

          <div className="wrapper">
            <label className="Label" >Contact Number</label>
            <input type="text" onChange={this.handleInputChange}  name="contactNumber" />
          </div>

          <div className="save-course">
            <button type="submit" onClick={this.registerCourse} className="save-course-btn">
              Register Course
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default Register;
