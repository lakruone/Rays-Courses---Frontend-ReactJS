import React from 'react';

import Wrap from '../../hoc/wrap';
import classes from './Layout.css';

const layout = (props) => (
  <Wrap>
    <div>Navabar </div>
    
    <main className={classes.Content}>
      {props.children}
    </main>
  </Wrap>
);

export default layout;
