import React, { useEffect, useState } from 'react';
import AuthService from '../../../auth/AuthService';
import axios from '../../../axios';

import Navbar from '../Navbar';
import Course from '../../../components/course/course';
import './dashboard.css';

const Dashboard = (props) => {

  const Auth = new AuthService();
  const auth = true;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    console.log("hello");
    if (Auth.loggedIn() === false) {
      props.history.replace('/admin');
    }
    const token = Auth.getToken();

    if (token != null) {
      axios.get('/admin/courses', {
        headers: {
          'authorization': "bearer " + token
        }
      })
        .then(res => {
          setCourses(res.data.result);
        });
    }

  }, []);



  const HandleNewCourse = (event) => {
    this.props.history.push('/admin/add-new');
  }

  const HandleDeleteCourse = (courseId) => {
    const token = Auth.getToken();

    axios.delete('/admin/delete-course/' + courseId, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'bearer ' + token
      }
    }).then(res => {
      console.log(res.data);
      window.location.reload();
    });
  }


  let coursesList = courses.map(course => {
    return (
      <Course
        key={course.course_id}
        name={course.course_name}
        uni={course.university_name}
        description={course.course_description}
        clicked={() => HandleDeleteCourse(course.course_id)}
        auth={auth}
      />
    );
  });

  return (
    <div >
      <Navbar auth={auth} />

      <div className="Dashboard" >
        <h1>Dashboard</h1>

        <div className="container-add-new-btn">
          <button onClick={HandleNewCourse} className="add-new-btn">
            ADD NEW COURSE
          </button>
        </div>

        <section className="Courses">
          {coursesList}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
