import { useIntl } from 'react-intl';

import Layout from 'modules/Layout';
import PokemonDetails from 'modules/PokemonDetails/PokemonDetails';

const Pokemon = () => {
  return (
    <Layout>
      <Layout.MainTitle label="Bulbasauro" />
      <PokemonDetails />
    </Layout>
  );
};

export default Pokemon;
