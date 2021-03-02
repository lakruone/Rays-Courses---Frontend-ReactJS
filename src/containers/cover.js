import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './admin/login/Login';
import Home from './student/home/Home';
import Dashboard from './admin/dashboard/dashboard';
import NewCourse from './admin/newCourse/newCourse';
import RegisterCourse from './student/register/register';

class Cover extends Component {




  render(){

    return(
      <div >
        <Switch>
      

          <Route exact path="/admin/dashboard" component={Dashboard}/>
          <Route exact path="/admin/add-new" component={NewCourse}/>

          <Route exact path="/register/" component={RegisterCourse} />
          <Route exact path="/student" component={Home} />
          <Route  path="/" component={Login} />
        </Switch>

      </div>

    );
  }
}

export default Cover;
