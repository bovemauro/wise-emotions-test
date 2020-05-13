import { createNamespacedAction } from '../config/store/utils';

const moduleName = 'APP';

export const AppActionTypes = {
  GET_ACCESS_TOKEN_REQUEST: createNamespacedAction(
    moduleName,
    'GET_ACCESS_TOKEN_REQUEST'
  ),
  GET_ACCESS_TOKEN_SUCCESS: createNamespacedAction(
    moduleName,
    'GET_ACCESS_TOKEN_SUCCESS'
  ),
  GET_ACCESS_TOKEN_ERROR: createNamespacedAction(
    moduleName,
    'GET_ACCESS_TOKEN_ERROR'
  ),
};

/**
 * Actions definition
 **/

export const getAccessTokenRequest = (payload) => ({
  type: AppActionTypes.GET_ACCESS_TOKEN_REQUEST,
  payload,
});
export const getAccessTokenSuccess = (payload) => ({
  type: AppActionTypes.GET_ACCESS_TOKEN_SUCCESS,
  payload,
});
export const getAccessTokenError = () => ({
  type: AppActionTypes.GET_ACCESS_TOKEN_ERROR,
});
