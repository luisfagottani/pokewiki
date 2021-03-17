import 'assets/styles/styles.scss';

import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import i18nMessages from './i18n';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="pt-BR" messages={i18nMessages['pt-BR']}>
      <Router>
        <Route>
          <App />
        </Route>
      </Router>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
