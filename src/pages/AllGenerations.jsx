import React from 'react';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import Layout from 'modules/shared/Layout';
import Generations from 'modules/Generations';
import { fetchGenerations } from 'redux/ducks/generations';

const AllGenerations = ({ handleFetchGenerations }) => {
  const intl = useIntl();

  React.useEffect(() => {
    handleFetchGenerations();
  }, [handleFetchGenerations]);

  return (
    <Layout>
      <Layout.MainTitle label={intl.formatMessage({ id: 'generations.title', defaultMessage: 'Generations Title' })} />
      <Generations />
    </Layout>
  );
};

const mapDispatchToProps = {
  handleFetchGenerations: fetchGenerations,
};

export default connect(null, mapDispatchToProps)(AllGenerations);
