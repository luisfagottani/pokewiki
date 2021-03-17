import { useIntl } from 'react-intl';

import Layout from 'modules/Layout';
import PokeBlocks from 'modules/PokeBlocks';

const Home = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Layout.MainTitle label={intl.formatMessage({ id: 'home.title', defaultMessage: 'Home Page Title' })} />
      <PokeBlocks />
    </Layout>
  );
};

export default Home;
