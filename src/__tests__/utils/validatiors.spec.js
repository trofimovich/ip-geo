import validators from '../../utils/validators';

describe('validators', () => {
  describe('ip', () => {
    it('Should validate IP addresses', () => {
      const validMock = [
        '130.220.20.38',
        '119.82.19.207',
        '25.1.250.182',
        '25.1.250.182',
        '130.215.176.115',
        '84.194.226.226',
        '10.199.218.43',
        '52.232.142.58',
        '52.232.142.58',
        '130.220.20.38',
        '52.232.142.58',
        '174.84.62.65',
      ];

      const invalidMock = [
        '10000.10.13444.20',
        'text',
        '-102.30.30.10',
        '1,2,3,4,4',
        null,
      ];

      validMock.forEach(test => {
        const isValid = validators.ip(test);
        expect(isValid).toBe(true);
      });

      invalidMock.forEach(test => {
        const isValid = validators.ip(test);
        expect(isValid).toBe(false);
      });
    })
  })

  describe('url', () => {
    it('Should validate URL addresses', () => {
      const validMock = [
        'google.com',
        'abcd.xyz',
        'http://facebook.com',
        'https://someaddress.fi',
        'x.yz',
        'test.co.uk'
      ];

      const invalidMock = [
        'google.co .uk',
        'https://',
      ];

      validMock.forEach(test => {
        const isValid = validators.url(test);
        expect(isValid).toBe(true);
      });

      invalidMock.forEach(test => {
        const isValid = validators.url(test);
        expect(isValid).toBe(false);
      });
    })
  })
})