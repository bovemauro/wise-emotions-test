import { SearchPageActionTypes } from './actions';

export const INITIAL_STATE = {
  animals: [],
  pagination: {},
  isLoading: false,
};

export const ACTION_HANDLERS = {
  [SearchPageActionTypes.GET_ANIMALS_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [SearchPageActionTypes.SET_LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
};

export function searchPageReducer(state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

export default searchPageReducer;
