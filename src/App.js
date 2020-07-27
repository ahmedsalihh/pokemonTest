import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from './routes';
import { ConnectedRouter } from 'connected-react-router';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map(route => (
          <Route {...route} />
        ))}



      </Switch>
    </ConnectedRouter>
  );
};
export default App;
