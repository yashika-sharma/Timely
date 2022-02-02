const admin = require('firebase-admin');
const serviceAccount = require('../miniproject-31b21-firebase-adminsdk-r248m-89e716d658.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'mongodb://127.0.0.1:27017/Users',
});

exports.messaging = admin.messaging();
