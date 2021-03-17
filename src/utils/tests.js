import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { createStore, combineReducers } from 'redux';
import i18nMessages from 'i18n';

import middleware, { sagaMiddleware } from 'redux/middleware';

export const renderWithReactIntl = (component) => (
  <IntlProvider messages={i18nMessages['pt-BR']} locale="pt-BR">
    {component}
  </IntlProvider>
);

export const componentWithRouter = (initialRoute) => (children) => {
  if (typeof children === 'function') {
    return (
      <MemoryRouter initialIndex={0} initialEntries={initialRoute && [initialRoute]}>
        {children()}
      </MemoryRouter>
    );
  }
  return (
    <MemoryRouter initialEntries={initialRoute && [initialRoute]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
};

export const createMockStore = ({ reducers, initialState }) => {
  return createStore(combineReducers(reducers), initialState, middleware);
};

export const mockSaga = (fnGenerators) => sagaMiddleware.run(fnGenerators);

function render(ui, store, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
