// Initializes the `refresh-tokens` service on path `/refresh-tokens`
const { RefreshTokens } = require('./refresh-tokens.class');
const createModel = require('../../models/refresh-tokens.model');
const hooks = require('./refresh-tokens.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/refresh-tokens', new RefreshTokens(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('refresh-tokens');

  service.hooks(hooks);
};
