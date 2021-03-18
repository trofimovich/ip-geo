import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { findLocation } from '../../actions/location';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  let store;
  let fetchedLocation = {
    country_name: 'US'
  }

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates "LOCATION_REQUEST_INIT", "LOCATION_REQUEST_ERROR" in case of error', () => {
    nock('https://api.ipstack.com')
      .get('/invalid.com?fields=country_name,ip,location,latitude,longitude,city&access_key=undefined')
      .reply(500, null, {'Access-Control-Allow-Origin': '*'});

    return store.dispatch(findLocation('invalid.com')).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('creates "LOCATION_REQUEST_INIT", "LOCATION_REQUEST_SUCCESS" in case of error', () => {
    nock('https://api.ipstack.com')
      .get('/valid.com?fields=country_name,ip,location,latitude,longitude,city&access_key=undefined')
      .reply(200, fetchedLocation, {'Access-Control-Allow-Origin': '*'});

    return store.dispatch(findLocation('valid.com')).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  })
});
