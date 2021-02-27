import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './admin/login/Login';
import Home from './student/home/Home';
import Dashboard from './admin/dashboard/dashboard';


class Cover extends Component {


  render(){
    return(
      <div >
        <Switch>
          <Route path="/admin" exact component={Login} />
          <Route path="/admin/dashboard" exact component={Dashboard} />


          <Route path="/" exact component={Home} />
        </Switch>

      </div>

    );
  }
}

export default Cover;
