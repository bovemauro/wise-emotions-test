import { AppActionTypes } from './actions';

export const INITIAL_STATE = {};

export const ACTION_HANDLERS = {};

export function appReducer(state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

export default appReducer;
