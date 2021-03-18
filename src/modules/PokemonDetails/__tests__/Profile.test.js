import { createMockStore, render } from 'utils/tests';
import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from 'redux/ducks/app';
import Profile from '../components/Profile';
import { details } from './__fixtures__';

const mockStore = createMockStore({
  reducers: { [APP_REDUCER_NAME]: AppReducer },
  initialState: {
    [APP_REDUCER_NAME]: {
      isLoading: true,
      locale: 'EN',
    },
  },
});

describe('<PokemonDetails />', () => {
  it('Should render without errors', () => {
    const { container } = render(<Profile name="bulbasaur" details={details} />, mockStore);

    expect(container).toMatchSnapshot();
  });

  it('Should render with the correct info', () => {
    const { getByText } = render(<Profile name="bulbasaur" details={details} />, mockStore);

    getByText('bulbasaur');
    getByText('1');
    getByText('64');
    getByText('7');
    getByText('69');
  });

  describe('if the details are being loaded', () => {
    it('Should show the skeleton loading', () => {
      const { container } = render(<Profile name="bulbasaur" details={undefined} />, mockStore);
      expect(container.querySelector('.list--loading')).toBeTruthy();
    });
  });
});
