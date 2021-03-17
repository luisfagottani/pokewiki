import produce from 'immer';

export const REDUCER_NAME = 'pokemons';

// TYPES
export const Types = {
  FETCH_POKEMONS: `${REDUCER_NAME}/FETCH_POKEMONS`,
};

// INITIAL STATE
const initialState = {
  pokemons: true,
};

// REDUCER
export const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
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
