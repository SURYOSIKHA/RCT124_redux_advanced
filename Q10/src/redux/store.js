import { legacy_createStore as createStore, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import logger from 'redux-logger';
import { authReducer } from './reducers/authReducer';
import { quizReducer } from './reducers/quizReducer';
import { thunk } from 'redux-thunk';

// Combine reducers for authentication and quiz states
const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

// Apply thunk and logger middleware
const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
