import { combineReducers } from 'redux';
import appReducer from '../../ducks/reducer';
import searchPageReducer from '../../routes/SearchPage/ducks/reducer';

export default combineReducers({
  app: appReducer,
  searchPage: searchPageReducer,
});
