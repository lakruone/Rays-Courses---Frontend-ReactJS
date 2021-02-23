import React from 'react';

import Wrap from '../../hoc/wrap';

const layout = (props) => (
  <Wrap>
    <div>Navabar , backdrop</div>
    <main>
      {props.children}
    </main>
  </Wrap>
);

export default layout;
