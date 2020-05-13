import { createLogic } from 'redux-logic';
import {
  AppActionTypes,
  getAccessTokenSuccess,
  getAccessTokenError,
} from './actions';
import API from '../config/API';
import { GET_ACCESS_TOKEN } from '../constants/endpoints';

export default [
  createLogic({
    type: AppActionTypes.GET_ACCESS_TOKEN_REQUEST,
    async process({ _ }, dispatch, done) {
      try {
        const response = await API().post(GET_ACCESS_TOKEN, {
          grant_type: 'client_credentials',
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
        });
        const { access_token } = response?.data;
        if (access_token) {
          dispatch(getAccessTokenSuccess(access_token));
        } else {
          dispatch(getAccessTokenError());
        }
      } catch (err) {
        dispatch(getAccessTokenError());
      }
      done();
    },
  }),
  createLogic({
    type: AppActionTypes.GET_ACCESS_TOKEN_SUCCESS,
    async process({ action }, dispatch, done) {
      localStorage.setItem('access_token', action.payload);
      done();
    },
  }),
];
