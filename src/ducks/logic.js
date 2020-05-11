import { createLogic } from 'redux-logic';
import { AppActionTypes, getAccessTokenSuccess, getAccessTokenError } from './actions';
import API from '../config/API';
import { GET_ACCESS_TOKEN } from '../constants/endpoints';
import { CLIENT_ID, CLIENT_SECRET } from '../constants/petfinder';

export default [
  createLogic({
    type: AppActionTypes.GET_ACCESS_TOKEN_REQUEST,
    async process({ _ }, dispatch, done) {
      try {
        const response = await API().get(GET_ACCESS_TOKEN, {
          params: {
            grant_type: 'client_credentials',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
          },
        });
        if (response?.data?.token) {
          dispatch(getAccessTokenSuccess());
        } else {
          dispatch(getAccessTokenError());
        }
      } catch (err) {
        dispatch(getAccessTokenError());
      }
      done();
    },
  }),
];
