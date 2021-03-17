import { combineReducers } from 'redux';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'LOCATION_USER_REQUEST_INIT':
      return true;
    case 'LOCATION_USER_REQUEST_SUCCESS':
    case 'REQUEST_USER_REQUEST_ERROR':
      return false;
    default:
      return state;
  }
};

const location = (state = null, action) => {
  switch (action.type) {
    case 'LOCATION_USER_REQUEST_INIT':
      return state;
    case 'LOCATION_USER_REQUEST_SUCCESS':
      return action.location;
    case 'REQUEST_ERROR':
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  location,
  isFetching,
});
