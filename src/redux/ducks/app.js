import produce from 'immer';

export const REDUCER_NAME = 'app';

// TYPES
export const Types = {
  SET_GLOBAL_LOADING: `${REDUCER_NAME}/SET_GLOBAL_LOADING`,
};

// INITIAL STATE
const initialState = {
  isLoading: true,
  locale: 'pt-BR',
};

// REDUCER
export const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case Types.SET_GLOBAL_LOADING:
      draft.isLoading = action.payload;
      return draft;

    case Types.SET_USER_PROFILE:
      draft.profile = action.profile;
      return draft;

    default:
      return draft;
  }
});

// ACTION FUNCTIONS

export function defineGlobalLoading(status) {
  return {
    type: Types.SET_GLOBAL_LOADING,
    payload: status,
  };
}

// SELECTOR FUNCTIONS
export function getGlobalLoading(state) {
  return state[REDUCER_NAME].isLoading;
}

export function getLocale(state) {
  return state[REDUCER_NAME].locale;
}
