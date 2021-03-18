import React from 'react';
import { createMockStore, render } from 'utils/tests';
import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from 'redux/ducks/app';
import { reducer as GenerationReducer, REDUCER_NAME as GENERATION_REDUCER_NAME } from 'redux/ducks/generations';
import Generations from '../';

const mockStore = createMockStore({
  reducers: { [APP_REDUCER_NAME]: AppReducer, [GENERATION_REDUCER_NAME]: GenerationReducer },
  initialState: {
    [APP_REDUCER_NAME]: {
      isLoading: true,
      locale: 'EN',
    },
    [GENERATION_REDUCER_NAME]: {
      generations: [{ name: 'generation-i' }, { name: 'generation-ii' }, { name: 'generation-iii' }],
    },
  },
});

describe('<Generations />', () => {
  it('Should render without errors', () => {
    const { container } = render(<Generations />, mockStore);
    expect(container).toMatchSnapshot();
  });

  it('should render with the correct generations', () => {
    const { getByText } = render(<Generations />, mockStore);

    getByText('generation-i');
    getByText('generation-ii');
    getByText('generation-iii');
  });
});
