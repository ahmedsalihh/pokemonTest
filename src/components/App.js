import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import PokeList from './PokeList';
import PokeDetail from './PokeDetail';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/pokemon/:name'>
          <PokeDetail />
        </Route>
        <Route path='/pokemon'>
          <PokeList />
        </Route>
        <Redirect exact from='/' to='/pokemon' />
      </Switch>
    </React.Fragment>
  );
};
export default App;
