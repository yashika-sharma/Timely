// const {
//   refreshAccessToken,
//   revokeRefreshToken,
// } = require('@jackywxd/feathers-refresh-token');
// const {authenticate} = require('@feathersjs/authentication').hooks;

const authentication = require('@feathersjs/authentication');
const {
  refreshAccessToken,
  logoutUser,
  revokeRefreshToken,
} = require('@jackywxd/feathers-refresh-token/lib');
// Don't remove this comment. It's needed to format import lines nicely.

const {authenticate} = authentication.hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [refreshAccessToken()],
    update: [],
    patch: [authenticate('jwt'), revokeRefreshToken()],
    remove: [authenticate('jwt'), logoutUser()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [logoutUser()],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
