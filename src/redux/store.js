import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loremReducer from './loremReducer';

// Create Redux Store with Thunk Middleware
const store = createStore(
  loremReducer,
  applyMiddleware(thunk)
);

export default store;