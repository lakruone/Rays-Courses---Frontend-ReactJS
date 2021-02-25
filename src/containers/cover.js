import React, {Component} from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './cover.css';

class Cover extends Component {

  render(){
    return(
      <div className="Cover">
        <header>
              <nav>
                  <ul>
                      <li><NavLink
                          to="/posts/"
                          exact
                          activeClassName="my-active"
                          activeStyle={{
                              color: '#fa923f',
                              textDecoration: 'underline'
                          }}>Posts</NavLink></li>
                      <li><NavLink to={{
                          pathname: '/new-post',
                          hash: '#submit',
                          search: '?quick-submit=true'
                      }}>New Post</NavLink></li>
                  </ul>
              </nav>
          </header>


          <div>Navbar</div>
          <div>Routing for student and Admin</div>

      </div>

    );
  }
}

export default Cover;
