import { combineReducers } from 'redux';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'LOCATION_REQUEST_INIT':
      return true;
    case 'LOCATION_REQUEST_SUCCESS':
    case 'LOCATION_REQUEST_ERROR':
      return false;
    default:
      return state;
  }
};

const location = (state = null, action) => {
  switch (action.type) {
    case 'LOCATION_REQUEST_INIT':
      return state;
    case 'LOCATION_REQUEST_SUCCESS':
      return action.location;
    case 'LOCATION_REQUEST_ERROR':
      return state;
    default:
      return state;
  }
};

const searchHistory = (state = [], action) => {
  switch (action.type) {
    case 'LOCATION_REQUEST_SUCCESS':
      return [...state, action.location];
    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
  location,
  searchHistory,
});
