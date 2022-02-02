const {
  AuthenticationService,
  JWTStrategy,
} = require('@feathersjs/authentication');
const {LocalStrategy} = require('@feathersjs/authentication-local');
const {expressOauth} = require('@feathersjs/authentication-oauth');
const CustomAuthService = require('./authentication/CustomAuthService');
const CustomJwtStrategy = require('./authentication/CustomJwtStrategy');
//import issueRefreshToken from '@jackywxd/feathers-refresh-token';
const {issueRefreshToken} = require('@jackywxd/feathers-refresh-token');

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);
  app.service('authentication').hooks({
    after: {
      create: [issueRefreshToken()],
    },
  });
  app.configure(expressOauth());
};

// module.exports = app => {
//   const authentication = new CustomAuthService(app);

//   authentication.register('jwt', new CustomJwtStrategy());
//   authentication.register('local', new LocalStrategy());

//   app.use('/authentication', authentication);
//   app.configure(expressOauth());
// };
