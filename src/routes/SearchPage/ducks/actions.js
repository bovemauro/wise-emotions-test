import { createNamespacedAction } from '../../../config/store/utils';

const moduleName = 'SEARCH_PAGE';

export const SearchPageActionTypes = {
  GET_ANIMALS_REQUEST: createNamespacedAction(
    moduleName,
    'GET_ANIMALS_REQUEST'
  ),
  GET_ANIMALS_SUCCESS: createNamespacedAction(
    moduleName,
    'GET_ANIMALS_SUCCESS'
  ),
  GET_ANIMALS_ERROR: createNamespacedAction(moduleName, 'GET_ANIMALS_ERROR'),

  SET_LOADING: createNamespacedAction(moduleName, 'SET_LOADING'),
};

/**
 * Actions definition
 **/

export const getAnimalsRequest = (payload) => ({
  type: SearchPageActionTypes.GET_ANIMALS_REQUEST,
  payload,
});
export const getAnimalsSuccess = (payload) => ({
  type: SearchPageActionTypes.GET_ANIMALS_SUCCESS,
  payload,
});
export const getAnimalsError = () => ({
  type: SearchPageActionTypes.GET_ANIMALS_ERROR,
});

export const setLoading = (payload) => ({
  type: SearchPageActionTypes.SET_LOADING,
  payload,
});
