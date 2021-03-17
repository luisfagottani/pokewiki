import 'assets/styles/styles.scss';

import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux';
import i18nMessages from './i18n';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale="pt-BR" messages={i18nMessages['pt-BR']}>
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
