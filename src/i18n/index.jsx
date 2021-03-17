import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { ptBrTranslations, enTranslations } from './messages';
import { getLocale } from 'redux/ducks/app';

export const Messages = { 'pt-BR': ptBrTranslations, EN: enTranslations };

const ConnectedIntlProvider = ({ locale, children }) => {
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
