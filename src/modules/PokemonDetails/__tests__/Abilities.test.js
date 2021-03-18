import { createMockStore, render } from 'utils/tests';
import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from 'redux/ducks/app';
import Abilities from '../components/Abilities';
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

describe('<Abilities />', () => {
  it('Should render without errors', () => {
    const { container } = render(<Abilities abilities={details?.abilities} />, mockStore);

    expect(container).toMatchSnapshot();
  });

  it('Should render with the correct info', () => {
    const { getByText } = render(<Abilities abilities={details?.abilities} />, mockStore);

    getByText('🕹️ Abilities');
    getByText('overgrow');
    getByText('chlorophyll');
  });

  describe('if the abilities are being loaded', () => {
    it('Should show the loading component', () => {
      const { getByTestId } = render(<Abilities abilities={undefined} />, mockStore);
      getByTestId('loading-section');
    });
  });
});
