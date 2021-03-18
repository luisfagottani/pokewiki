import { createMockStore, render } from 'utils/tests';
import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from 'redux/ducks/app';
import { reducer as PokemonsReducer, REDUCER_NAME as POKEMON_REDUCER_NAME } from 'redux/ducks/pokemons';
import PokemonDetails from '../PokemonDetails';
import { details } from '../__fixtures__';

const mockStore = createMockStore({
  reducers: { [APP_REDUCER_NAME]: AppReducer, [POKEMON_REDUCER_NAME]: PokemonsReducer },
  initialState: {
    [APP_REDUCER_NAME]: {
      isLoading: true,
      locale: 'EN',
    },
    [POKEMON_REDUCER_NAME]: {
      species: { bulbasaur: { name: 'bulbasaur', details: details } },
    },
  },
});

describe('<PokemonDetails />', () => {
  it('Should render without errors', () => {
    const { container } = render(<PokemonDetails />, mockStore);

    expect(container).toMatchSnapshot();
  });

  it('Should render all sections', () => {
    const { getByTestId } = render(<PokemonDetails />, mockStore);

    getByTestId('profile');
    getByTestId('abilities');
    getByTestId('stats');
  });
});
