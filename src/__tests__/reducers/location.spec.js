import locationReducer from '../../reducers/location';

describe('locationReducer', () => {
  it('should return initial state', () => {
    expect(locationReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle "LOCATION_REQUEST_INIT"', () => {
    const reduced = locationReducer({
      isFetching: false,
      location: null,
      searchHistory: [],
    }, { type: 'LOCATION_REQUEST_INIT' });

    expect(reduced.isFetching).toBe(true);
    expect(reduced.location).toBeNull();
    expect(reduced.searchHistory).toEqual([]);
  });

  it('should handle "LOCATION_REQUEST_SUCCESS"', () => {
    const reduced = locationReducer({
      isFetching: true,
      location: null,
      searchHistory: [],
    }, { type: 'LOCATION_REQUEST_SUCCESS', location: { country: 'US' } });

    expect(reduced.isFetching).toBe(false);
    expect(reduced.location).toEqual({ country: 'US' });
    expect(reduced.searchHistory).toEqual([{ country: 'US' }]);
  });

  it('should handle "LOCATION_REQUEST_ERROR"', () => {
    const reduced = locationReducer({
      isFetching: true,
      location: null,
      searchHistory: [],
    }, { type: 'LOCATION_REQUEST_ERROR', error: 'Something went wrong.' });

    expect(reduced.isFetching).toBe(false);
    expect(reduced.location).toBeNull();
    expect(reduced.searchHistory).toEqual([]);
  });
});

