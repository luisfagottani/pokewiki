import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from 'pages';
import Pokemon from 'pages/Pokemon';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route exact path="/pokemon/:id" component={Pokemon} />
  </Switch>
);

export default Routes;
