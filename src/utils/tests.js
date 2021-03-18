import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { IntlProvider } from 'react-intl';
import { createStore, combineReducers } from 'redux';

import { Messages } from 'i18n';
import middleware, { sagaMiddleware } from 'redux/middleware';

export const createMockStore = ({ reducers, initialState }) => {
  return createStore(combineReducers(reducers), initialState, middleware);
};

export const mockSaga = (fnGenerators) => sagaMiddleware.run(fnGenerators);

function render(ui, store, { ...renderOptions } = {}) {
  const locale = store.getState().app.locale ?? 'EN';
  const history = createMemoryHistory();
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <IntlProvider messages={Messages[locale]} locale={locale}>
          <Router history={history}>{children}</Router>
        </IntlProvider>
      </Provider>
    );
  }

  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
