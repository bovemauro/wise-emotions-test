import { createNamespacedAction } from '../config/store/utils';

const moduleName = 'APP';

export const AppActionTypes = {
  GET_ACCESS_TOKEN_REQUEST: createNamespacedAction(moduleName, 'GET_ACCESS_TOKEN_REQUEST'),
  GET_ACCESS_TOKEN_SUCCESS: createNamespacedAction(moduleName, 'GET_ACCESS_TOKEN_SUCCESS'),
  GET_ACCESS_TOKEN_ERROR: createNamespacedAction(moduleName, 'GET_ACCESS_TOKEN_ERROR'),
};

/**
 * Actions definition
 **/

export const getAccessTokenRequest = (data) => ({
  type: AppActionTypes.GET_ACCESS_TOKEN_REQUEST,
  payload: data,
});
export const getAccessTokenSuccess = () => ({
  type: AppActionTypes.GET_ACCESS_TOKEN_SUCCESS,
});
export const getAccessTokenError = () => ({
  type: AppActionTypes.GET_ACCESS_TOKEN_ERROR,
});
