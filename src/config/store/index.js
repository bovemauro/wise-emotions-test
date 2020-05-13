import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { createLogicMiddleware } from 'redux-logic';
import appLogic from '../../ducks/logic';
import searchPageLogic from '../../routes/SearchPage/ducks/logic';

const logicMiddleware = createLogicMiddleware([
  ...appLogic,
  ...searchPageLogic,
]);

const enhancer = compose(
  applyMiddleware(logicMiddleware),
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? // Call the brower extension function to create the enhancer.
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : // Else we return a no-op function.
      (f) => f
);

const store = createStore(reducers, enhancer);

export default store;
