const imgur = require('../lib/imgur.js');

describe('getClientId()', function () {
  test('should return the default client id, if nothing is set', function () {
    const defaultClientId = 'f0ea04148a54268';
    return expect(imgur.getClientId()).toBe(defaultClientId);
  });

  test('should return the same client that was set', function () {
    const clientId = '123456789abcdef';
    imgur.setClientId(clientId);

    return expect(imgur.getClientId()).toBe(clientId);
  });
});
