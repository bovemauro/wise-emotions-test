import { combineReducers } from 'redux';
import appReducer from '../../ducks/reducer';

export default combineReducers({
  app: appReducer,
});
