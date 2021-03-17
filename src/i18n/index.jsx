import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { ptBrTranslations, enTranslations } from './messages';
import { getLocale } from 'redux/ducks/app';

const ConnectedIntlProvider = ({ locale, children }) => {
  const Messages = { 'pt-BR': ptBrTranslations, EN: enTranslations };
  return (
    <IntlProvider key={locale} locale={locale} messages={Messages[locale]}>
      {children}
    </IntlProvider>
  );
};

const mapStateToProps = (state) => ({
  locale: getLocale(state),
});

export default connect(mapStateToProps)(ConnectedIntlProvider);
