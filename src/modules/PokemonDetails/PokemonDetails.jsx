import { connect } from 'react-redux';

import Layout from 'modules/shared/Layout/Layout';
import { fetchPokemonById, getPokemonById } from 'redux/ducks/pokemons';
import Profile from './components/Profile';
import React from 'react';

const PokemonDetails = ({ pokemon, handleFetchPokemonById, pokeId }) => {
  React.useEffect(() => {
    if (!pokemon || !pokemon?.isFetched) {
      handleFetchPokemonById(pokeId);
    }
  }, [pokemon, pokeId, handleFetchPokemonById]);

  return (
    <Layout.Row>
      <Layout.Column type="one-quarter">
        <Profile name={pokemon?.name} />
      </Layout.Column>
      <Layout.Column type="auto">asdadsa</Layout.Column>
    </Layout.Row>
  );
};

const mapStateToProps = (state, props) => ({
  pokemon: getPokemonById(state, props.pokeId),
});

const mapDispatchToProps = {
  handleFetchPokemonById: fetchPokemonById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
