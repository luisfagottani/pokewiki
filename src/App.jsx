import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from 'modules/Footer';
import GlobalLoading from 'modules/GlobalLoading';
import Header from 'modules/Header';
import { fetchPokemons } from 'redux/ducks/pokemons';
import Routes from './routes';

const App = ({ handleFetchPokemons }) => {
  React.useEffect(() => {
    handleFetchPokemons();
  }, []);

  const isLocal = window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1');
  const basename = isLocal ? '' : '/pokewiki';

  return (
    <Router basename={basename}>
      <GlobalLoading />
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
};

const mapDispatchToProps = {
  handleFetchPokemons: fetchPokemons,
};

export default connect(null, mapDispatchToProps)(App);
