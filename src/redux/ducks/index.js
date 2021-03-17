import { combineReducers } from 'redux';

import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from './app';

export default combineReducers({
  [APP_REDUCER_NAME]: AppReducer,
});
