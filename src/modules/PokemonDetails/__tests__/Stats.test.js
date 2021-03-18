import { createMockStore, render } from 'utils/tests';
import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from 'redux/ducks/app';
import Stats from '../components/Stats';
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

describe('<Stats />', () => {
  it('Should render without errors', () => {
    const { container } = render(<Stats stats={details?.stats} />, mockStore);

    expect(container).toMatchSnapshot();
  });

  it('Should render with the correct info', () => {
    const { getByText } = render(<Stats stats={details?.stats} />, mockStore);

    getByText('📈 Base Stats');
    getByText('HP:');
    getByText('Attack:');
    getByText('Defense:');
    getByText('Special Attack:');
    getByText('Special Defense:');
    getByText('Speed:');
  });

  describe('if the abilities are being loaded', () => {
    it('Should show the loading component', () => {
      const { getByTestId } = render(<Stats stats={undefined} />, mockStore);
      getByTestId('loading-section');
    });
  });
});
