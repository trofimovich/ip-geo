import * as api from '../api/location';

export const findUserLocation = () => (dispatch) => {
  dispatch({ type: 'LOCATION_USER_REQUEST_INIT' });
  return api
    .getLocationInfo()
    .then(({ data }) => dispatch({ type: 'LOCATION_USER_REQUEST_SUCCESS', location: data }))
    .catch((error) => dispatch({ type: 'LOCATION_USER_REQUEST_ERROR', error }));
};

export const findLocation = (formData) => (dispatch) => {
  dispatch({ type: 'LOCATION_REQUEST_INIT' });
  return api
    .getLocationInfo(formData)
    .then(({ data }) => dispatch({ type: 'LOCATION_REQUEST_SUCCESS', location: { ...data, searchString: formData } }))
    .catch((error) => dispatch({ type: 'LOCATION_REQUEST_ERROR', error }));
};
