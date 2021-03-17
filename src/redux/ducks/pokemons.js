import produce from 'immer';

export const REDUCER_NAME = 'pokemons';

// TYPES
export const Types = {
  FETCH_POKEMONS: `${REDUCER_NAME}/FETCH_POKEMONS`,
  PERSIST_POKEMONS: `${REDUCER_NAME}/PERSIST_POKEMONS`,
};

// INITIAL STATE
const initialState = {
  species: [],
};

// REDUCER
export const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case Types.PERSIST_POKEMONS:
      draft.species.push(...action.payload);

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

export function persistPokemons(pokemons) {
  return {
    type: Types.PERSIST_POKEMONS,
    payload: pokemons,
  };
}

export function getPokemons(state) {
  return state[REDUCER_NAME].species;
}
