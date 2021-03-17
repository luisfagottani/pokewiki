import React from 'react';
import { createMockStore, render, fireEvent } from 'utils/tests';
import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from 'redux/ducks/app';
import { act } from 'react-dom/test-utils';
import Footer from '..';
import store from 'redux';

const mockStore = createMockStore({
  reducers: { [APP_REDUCER_NAME]: AppReducer },
  initialState: {
    [APP_REDUCER_NAME]: {
      isLoading: true,
      locale: 'EN',
    },
  },
});

describe('<Footer />', () => {
  it('Should render without errors', () => {
    const { container } = render(<Footer />, mockStore);
    expect(container).toMatchSnapshot();
  });

  describe('When the english is the current locale', () => {
    it('should render the pt-br option', () => {
      const { getByText } = render(<Footer />, mockStore);

      getByText('PT-BR');
    });
  });

  describe('When the pt-br is the current locale', () => {
    it('should render the en option', () => {
      const { getByText } = render(<Footer />, mockStore);

      getByText('EN');
    });
  });

  describe('When click to change the locale', () => {
    it('should render the correct option', async () => {
      const { getByText, store } = render(<Footer />, mockStore);
      getByText('PokeAPI by Luis Agottani with CRA');

      const ptBrButton = getByText('PT-BR');

      await act(async () => {
        fireEvent.click(ptBrButton, { button: 1 });
      });

      expect(store.getState().app.locale).toBe('pt-BR');
    });
  });
});
