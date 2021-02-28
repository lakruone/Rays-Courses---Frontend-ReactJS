import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './admin/login/Login';
import Home from './student/home/Home';
import Dashboard from './admin/dashboard/dashboard';
import NewCourse from './admin/newCourse/newCourse';


class Cover extends Component {




  render(){

    return(
      <div >
        <Switch>
          <Route exact path="/admin" component={Login} />
          <Route exact path="/admin/dashboard" component={Dashboard}/>
          <Route exact path="/admin/add-new" component={NewCourse}/>


          <Route  path="/" component={Home} />
        </Switch>

      </div>

    );
  }
}

export default Cover;
