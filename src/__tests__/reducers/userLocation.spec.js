import userLocationReducer from '../../reducers/userLocation';

describe('locationReducer', () => {
  it('should return initial state', () => {
    expect(userLocationReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle "LOCATION_USER_REQUEST_INIT"', () => {
    const reduced = userLocationReducer({
      isFetching: false,
      location: null,
    }, { type: 'LOCATION_USER_REQUEST_INIT' });

    expect(reduced.isFetching).toBe(true);
    expect(reduced.location).toBeNull();
  });

  it('should handle "LOCATION_USER_REQUEST_SUCCESS"', () => {
    const reduced = userLocationReducer({
      isFetching: true,
      location: null,
    }, { type: 'LOCATION_USER_REQUEST_SUCCESS', location: { country: 'UK' } });

    expect(reduced.isFetching).toBe(false);
    expect(reduced.location).toEqual({ country: 'UK' });
  });

  it('should handle "LOCATION_USER_REQUEST_ERROR"', () => {
    const reduced = userLocationReducer({
      isFetching: true,
      location: null,
    }, { type: 'LOCATION_USER_REQUEST_ERROR', error: 'Something went wrong.' });

    expect(reduced.isFetching).toBe(false);
    expect(reduced.location).toBeNull();
  });
});

