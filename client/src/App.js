import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Auth } from 'pages';

const App = () => {
  return (
    <div className="wrapper">
      <Route exact path={['/', '/login', '/registration']} component={Auth} />
      <Route exact path="/im" component={Home} />
    </div>
  );
};

export default App;
