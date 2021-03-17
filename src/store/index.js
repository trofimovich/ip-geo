import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import locationReducer from '../reducers/location';

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    locationReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares)),
  );
  return store;
};

export default configureStore;
