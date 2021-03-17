import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import middleware, { sagaMiddleware } from './middleware';
import reducer from './ducks';
import runSaga from './sagas';

const store = createStore(reducer, composeWithDevTools(middleware));
runSaga(sagaMiddleware);

export default store;
