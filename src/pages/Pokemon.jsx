import { useParams } from 'react-router';

import Layout from 'modules/shared/Layout';
import PokemonDetails from 'modules/PokemonDetails/PokemonDetails';
import React from 'react';

const Pokemon = () => {
  const { pokeId } = useParams();

  return (
    <Layout>
      <PokemonDetails pokeId={pokeId} />
    </Layout>
  );
};

export default Pokemon;
