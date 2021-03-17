import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import location from '../reducers/location';
import userLocation from '../reducers/userLocation';

import sessionStorage from '../utils/sessionStorage';

const configureStore = () => {
  const preloadedState = { location: { searchHistory: sessionStorage.loadState('ip_search_history') } };
  const middlewares = [thunkMiddleware];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({ location, userLocation }),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  store.subscribe(() => {
    sessionStorage.saveState('ip_search_history', store.getState().location.searchHistory);
  });

  return store;
};

export default configureStore;
