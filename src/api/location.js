import axios from 'axios';

const ipstackAPI = axios.create({
  baseURL: 'http://api.ipstack.com/',
  timeout: 1000,
});

const DEFAULT_REQUEST_DATA = 'check'; // used to receive location based on user IP

export const getLocationInfo = (requestData = DEFAULT_REQUEST_DATA) => {
  const fields = ['country_name', 'ip', 'location', 'latitude', 'longitude', 'city'];
  return ipstackAPI.get(`/${requestData}?fields=${fields.join(',')}&access_key=${process.env.IPSTACK_API_KEY}`);
};
