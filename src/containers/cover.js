import React, {Component} from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Login from './admin/login/Login';
import Home from './student/home/Home';


class Cover extends Component {


  render(){
    return(
      <div >
        <Switch>
          <Route path="/admin" exact component={Login} />

          <Route path="/" exact component={Home} />
        </Switch>

      </div>

    );
  }
}

export default Cover;
