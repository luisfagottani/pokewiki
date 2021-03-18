import produce from 'immer';

export const REDUCER_NAME = 'family';

// TYPES
export const Types = {
  FETCH_GENERATIONS: `${REDUCER_NAME}/FETCH_POKEMONS`,
  FETCH_GENERATIONS_BY_ID: `${REDUCER_NAME}/FETCH_GENERATIONS_BY_ID`,
  PERSIST_GENERATIONS: `${REDUCER_NAME}/PERSIST_GENERATIONS`,
};

// INITIAL STATE
const initialState = {
  generations: [],
};

// REDUCER
export const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case Types.PERSIST_GENERATIONS:
      draft.generations = { ...action.payload };
      return draft;

    default:
      return draft;
  }
});

// ACTION FUNCTIONS
export function fetchGenerations() {
  return {
    type: Types.FETCH_GENERATIONS,
  };
}

export function fetchGenerationsById(id) {
  return {
    type: Types.FETCH_GENERATIONS_BY_ID,
    payload: id,
  };
}

export function persistGenerations(pokemons) {
  return {
    type: Types.PERSIST_GENERATIONS,
    payload: pokemons,
  };
}

// SELECTORS
export function getGenerations(state) {
  return state[REDUCER_NAME]?.generations;
}
