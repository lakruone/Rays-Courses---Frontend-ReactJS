import React, { Component } from 'react';
import AuthService from '../../../auth/AuthService';
import axios from '../../../axios';

import Navbar from '../Navbar';
import Course from '../../../components/course/course';
import './dashboard.css';

class Dashboard extends Component {

  constructor(props) {
      super(props)

      this.state = {
          auth : true,
          courses:[]

      }
      this.Auth = new AuthService();
  }



  componentDidMount(){

    if(this.Auth.loggedIn() === false){
        this.props.history.replace('/admin');
      }
    const token =this.Auth.getToken();

    if(token!=null){
      axios.get('/admin/courses', {
        headers: {
         'authorization': "bearer "+ token
       }
      })
       .then(res => {
         this.setState({
           courses:res.data.result
         });
         console.log(this.state.courses);
       });
     }

  }

  HandleNewCourse = (event) => {
    this.props.history.push('/admin/add-new');
  }

  render (){

    let   courses = this.state.courses.map( course => {
                return (
                    <Course
                        key={course.course_id}
                        name={course.course_name}
                        uni={course.university_name}
                        description={course.course_description}
                        />
                );
            } );

    return(
      <div >
        <Navbar auth={this.state.auth}/>

        <div className="Dashboard" >
          <h1>Dashboard</h1>

            <div className="container-add-new-btn">
              <button onClick={this.HandleNewCourse} className="add-new-btn">
                ADD NEW COURSE
              </button>
            </div>

          <section className="Courses">
            {courses}
          </section>
        </div>
      </div>
    );
  }

}

export default Dashboard;
