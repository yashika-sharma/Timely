const assert = require('assert');
const app = require('../../src/app');

describe('\'refresh-tokens\' service', () => {
  it('registered the service', () => {
    const service = app.service('refresh-tokens');

    assert.ok(service, 'Registered the service');
  });
});
