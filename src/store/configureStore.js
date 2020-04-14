import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import testPageReducer from '../reducers/testPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      testPage: testPageReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
