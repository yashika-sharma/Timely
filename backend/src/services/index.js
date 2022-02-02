const users = require('./users/users.service.js')
const topics = require('./topics/topics.service.js');
const uploads = require('./uploads/uploads.service.js');
const refreshTokens = require('./refresh-tokens/refresh-tokens.service.js');
const notifications = require('./notifications/notifications.service.js');
const complaints = require('./complaints/complaints.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(topics);
  app.configure(uploads);
  app.configure(refreshTokens);
  app.configure(notifications);
  app.configure(complaints);
}
