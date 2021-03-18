import { combineReducers } from 'redux';

import { reducer as AppReducer, REDUCER_NAME as APP_REDUCER_NAME } from './app';
import { reducer as PokemonsReducer, REDUCER_NAME as APP_POKEMONS_REDUCER } from './pokemons';
import { reducer as GenerationsReducer, REDUCER_NAME as APP_GENERATIONS_REDUCER } from './generations';

export default combineReducers({
  [APP_REDUCER_NAME]: AppReducer,
  [APP_POKEMONS_REDUCER]: PokemonsReducer,
  [APP_GENERATIONS_REDUCER]: GenerationsReducer,
});
