import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from 'pages';
import Pokemon from 'pages/Pokemon';
import PokemonsByGeneration from 'pages/PokemonsByGeneration';
import AllGenerations from 'pages/AllGenerations';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route exact path="/pokemon/:pokeId" component={Pokemon} />

    <Route exact path="/generations/" component={AllGenerations} />
    <Route exact path="/generations/:generationId" component={PokemonsByGeneration} />
  </Switch>
);

export default Routes;
