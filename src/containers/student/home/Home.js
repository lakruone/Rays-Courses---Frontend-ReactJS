import React, { Component } from 'react';

import Course from '../../../components/course/course';
import Navbar from '../Navbar';
import axios from '../../../axios';
import './Home.css';

class Home extends Component {

    constructor(props) {
      super(props)

      this.state = {
        auth : false,
        courses:[],
        searchTerm :""
      }
    }

    componentDidMount(){
        axios.get('/student/courses')
         .then(res => {
           this.setState({
             courses:res.data.result
           });
         });
    }

    HandleSearch = (e) => {
      this.setState({
        searchTerm:e.target.value
      });
    }

    HandleRegisterCourse = (course_id,course_name,course_description,university_name,country) => {
      // console.log("direct to register route");
      const data = {
        course_id:course_id,
        course_name : course_name,
        course_description : course_description,
        university_name : university_name,
        country : country
      }

      this.props.history.push('/register',data);
    }


    render () {
      let {searchTerm} = this.state;
      let   courses = this.state.courses.filter((course)=>{
        if(searchTerm===""){
          return course;
        }else if(course.course_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return course;
        }
      }).map( (course,key) => {
                  return (
                      <Course
                          key={course.course_id}
                          name={course.course_name}
                          uni={course.university_name}
                          description={course.course_description}
                          clicked={()=>this.HandleRegisterCourse(course.course_id,course.course_name,course.course_description,course.university_name,course.country)}
                          auth={this.state.auth}
                          />
                  );
              } );


        return (
            <div>
              <Navbar/>

            <div className="Home">
              <h1>Find Your Carrier Path</h1>

              <input tyepe="text" onChange={this.HandleSearch} name="search" className="Search"  placeholder="Search courses..."/>
                <section className="Courses" >
                    {courses}
                </section>
            </div>

            </div>
        );
    }
}

export default Home;
