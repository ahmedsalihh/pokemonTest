import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';
import { ConnectedRouter } from 'connected-react-router';

const App = ({ history }) => {
  return (
    <div data-test="component-app">
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </ConnectedRouter>
    </div>
  );
};
export default App;
