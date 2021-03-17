import React from 'react';
import { connect } from 'react-redux';

import Footer from 'modules/Footer';
import GlobalLoading from 'modules/GlobalLoading';
import Header from 'modules/Header';
import { fetchPokemons } from 'redux/ducks/pokemons';
import Routes from './routes';

const App = ({ handleFetchPokemons }) => {
  React.useEffect(() => {
    handleFetchPokemons();
  }, []);
  return (
    <>
      <GlobalLoading />
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

const mapDispatchToProps = {
  handleFetchPokemons: fetchPokemons,
};

export default connect(null, mapDispatchToProps)(App);
