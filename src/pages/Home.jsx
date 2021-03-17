import React from 'react';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import Layout from 'modules/shared/Layout';
import PokeBlocks from 'modules/PokeBlocks';
import { fetchPokemons } from 'redux/ducks/pokemons';

const Home = ({ handleFetchPokemons }) => {
  const intl = useIntl();

  React.useEffect(() => {
    handleFetchPokemons();
  }, [handleFetchPokemons]);

  return (
    <Layout>
      <Layout.MainTitle label={intl.formatMessage({ id: 'home.title', defaultMessage: 'Home Page Title' })} />
      <PokeBlocks />
    </Layout>
  );
};

const mapDispatchToProps = {
  handleFetchPokemons: fetchPokemons,
};

export default connect(null, mapDispatchToProps)(Home);
