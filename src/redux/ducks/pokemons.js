import produce from 'immer';
import { createSelector } from 'reselect';

export const REDUCER_NAME = 'pokemons';

// TYPES
export const Types = {
  FETCH_POKEMONS: `${REDUCER_NAME}/FETCH_POKEMONS`,
  FETCH_POKEMON_BY_ID: `${REDUCER_NAME}/FETCH_POKEMON_BY_ID`,
  PERSIST_POKEMONS: `${REDUCER_NAME}/PERSIST_POKEMONS`,
};

// INITIAL STATE
const initialState = {
  species: {},
};

// REDUCER
export const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case Types.PERSIST_POKEMONS:
      draft.species = { ...action.payload };
      return draft;

    default:
      return draft;
  }
});

// ACTION FUNCTIONS
export function fetchPokemons() {
  return {
    type: Types.FETCH_POKEMONS,
  };
}

export function fetchPokemonById(id) {
  return {
    type: Types.FETCH_POKEMON_BY_ID,
    payload: id,
  };
}

export function persistPokemons(pokemons) {
  return {
    type: Types.PERSIST_POKEMONS,
    payload: pokemons,
  };
}

// SELECTORS
const pokeId = (_, id) => id;

export function getPokemons(state) {
  return state[REDUCER_NAME]?.species;
}

export const getPokemonById = createSelector([getPokemons, pokeId], (pokemons, id) => {
  return pokemons[id];
});
