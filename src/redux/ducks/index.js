import { combineReducers } from 'redux';

import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from './app';
import { reducer as PokemonsReducer, REDUCER_NAME as APP_POKEMONS_REDUCER } from './pokemons';

export default combineReducers({
  [APP_REDUCER_NAME]: AppReducer,
  [APP_POKEMONS_REDUCER]: PokemonsReducer,
});
