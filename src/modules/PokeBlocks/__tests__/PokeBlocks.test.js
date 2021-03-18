import React from 'react';
import { createMockStore, render } from 'utils/tests';
import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from 'redux/ducks/app';
import { reducer as PokemonsReducer, REDUCER_NAME as POKEMON_REDUCER_NAME } from 'redux/ducks/pokemons';
import PokeBlocks from '..';

const mockStore = createMockStore({
  reducers: { [APP_REDUCER_NAME]: AppReducer, [POKEMON_REDUCER_NAME]: PokemonsReducer },
  initialState: {
    [APP_REDUCER_NAME]: {
      isLoading: true,
      locale: 'EN',
    },
    [POKEMON_REDUCER_NAME]: {
      species: { bulbasaur: { name: 'bulbasaur' }, ivysaur: { name: 'ivysaur' }, venusaur: { name: 'venusaur' } },
    },
  },
});

describe('<PokeBlocks />', () => {
  it('Should render without errors', () => {
    const { container } = render(<PokeBlocks />, mockStore);

    expect(container).toMatchSnapshot();
  });

  it('Should render with the corrects pokeblocks', () => {
    const { getByText } = render(<PokeBlocks />, mockStore);

    getByText('bulbasaur');
    getByText('ivysaur');
    getByText('venusaur');
  });
});
