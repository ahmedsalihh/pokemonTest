import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from '../routes';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        {routes.map(route => (
          <Route path={route.path} component={route.component} key={route.key} />
        ))}
        <Redirect exact from="/" to="/pokemon" />
      </Switch>
    </React.Fragment>
  );
};
export default App;
