import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthService from '../auth/AuthService';

import Login from './admin/login/Login';
import Home from './student/home/Home';
import Dashboard from './admin/dashboard/dashboard';


class Cover extends Component {




  render(){

    return(
      <div >
        <Switch>
          <Route exact path="/admin" component={Login} />
          <Route exact path="/admin/dashboard" component={Dashboard}/>


          <Route  path="/" component={Home} />
        </Switch>

      </div>

    );
  }
}

export default Cover;
