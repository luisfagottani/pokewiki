import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import Layout from 'modules/shared/Layout';
import { fetchGenerationsById, getGenerations } from 'redux/ducks/generations';
import PokeBlocks from 'modules/PokeBlocks';

const PokemonsByGeneration = ({ handleFetchGenerationsById, generations = [] }) => {
  const { generationId } = useParams();
  const generation = generations[0];

  React.useEffect(() => {
    handleFetchGenerationsById(generationId);
  }, [handleFetchGenerationsById, generationId]);

  return (
    <Layout>
      <Layout.MainTitle label={generation?.name} />
      <PokeBlocks />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  generations: getGenerations(state),
});

const mapDispatchToProps = {
  handleFetchGenerationsById: fetchGenerationsById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsByGeneration);
