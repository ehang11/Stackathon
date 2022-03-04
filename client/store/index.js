import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import * as actionCreators from '../store';
const reducer = combineReducers({ auth });
const composeEnhancers = composeWithDevTools({
  actionCreators,
  trace: true,
  traceLimit: 25,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))));

export default store;
export * from './auth';
