import React from 'react';
import { createMockStore, render } from 'utils/tests';
import { defineGlobalLoading, reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from 'redux/ducks/app';
import GlobalLoading from '..';

const mockStore = createMockStore({
  reducers: { [APP_REDUCER_NAME]: AppReducer },
  initialState: {
    [APP_REDUCER_NAME]: {
      isLoading: true,
    },
  },
});

describe('<GlobalLoading />', () => {
  it('Should render without errors', () => {
    const { container } = render(<GlobalLoading />, mockStore);
    expect(container).toMatchSnapshot();
  });

  describe('When the loading state is equal to true', () => {
    it('should render without the hide class', () => {
      const { container } = render(<GlobalLoading />, mockStore);

      expect(container.firstChild).not.toHaveClass('loading--hide');
    });
  });

  describe('When the loading state is equal to false', () => {
    it('should render with the hide class', () => {
      const { container, store } = render(<GlobalLoading />, mockStore);

      store.dispatch(defineGlobalLoading(false));

      expect(container.firstChild).toHaveClass('loading--hide');
    });
  });
});
