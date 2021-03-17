import React from 'react';
import { connect } from 'react-redux';

import Layout from 'modules/shared/Layout/Layout';
import { fetchPokemonById, getPokemonById } from 'redux/ducks/pokemons';
import Profile from './components/Profile';
import Stats from './components/Stats';
import Abilities from './components/Abilities';

const PokemonDetails = ({ pokemon, handleFetchPokemonById, pokeId }) => {
  React.useEffect(() => {
    if (!pokemon?.details) {
      handleFetchPokemonById(pokeId);
    }
  }, [pokemon, pokeId, handleFetchPokemonById]);

  return (
    <Layout.Row>
      <Layout.Column type="one-quarter">
        <Profile name={pokemon?.name} details={pokemon?.details} />
      </Layout.Column>
      <Layout.Column type="auto">
        <Abilities abilities={pokemon?.details?.abilities} />
        <Stats stats={pokemon?.details?.stats} />
      </Layout.Column>
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
