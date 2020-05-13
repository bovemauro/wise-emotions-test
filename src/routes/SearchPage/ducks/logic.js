import { createLogic } from 'redux-logic';
import {
  SearchPageActionTypes,
  getAnimalsSuccess,
  getAnimalsError,
  setLoading,
} from './actions';
import API from '../../../config/API';
import { GET_ANIMALS } from '../../../constants/endpoints';
import { isNilOrEmpty } from '../../../utils';

export default [
  createLogic({
    type: SearchPageActionTypes.GET_ANIMALS_REQUEST,
    async process({ action }, dispatch, done) {
      dispatch(setLoading(true));
      try {
        const response = await API().get(GET_ANIMALS, {
          params: {
            type: action.payload.petType,
            location: action.payload.location,
            page: action.payload.page,
            limit: 10,
            ...(!isNilOrEmpty(action.payload.gender) && {
              gender: action.payload.gender,
            }),
            ...(!isNilOrEmpty(action.payload.age) && {
              age: action.payload.age,
            }),
          },
        });
        if (response.data) {
          dispatch(getAnimalsSuccess(response.data));
          dispatch(setLoading(false));
        } else {
          dispatch(getAnimalsError());
          dispatch(setLoading(false));
        }
      } catch (err) {
        dispatch(getAnimalsError());
        dispatch(setLoading(false));
      }
      done();
    },
  }),
];
