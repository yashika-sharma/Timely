const admin = require('./firebaseInit');
const fetch = require('node-fetch');

module.exports = sendNotificationToClient = async app => {
  let users = await app
    .service('users')
    .find({
      query: {
        $and: [
          {device_token: {$exists: true}},
          {device_platform: 'android'},
          {notifications: true},
        ],
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('error in fetching users with existing device token', err);
    });

  let entireTopics = await app
    .service('topics')
    .find({})
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('error in fetching all topics', err);
    });

  let tokens = [];
  let notification_array = [];

  for (let k = 0; k < users.length; k++) {
    let topicNames = [];
    let obj = {};
    for (let i = 0; i < users[k].topics.length; i++) {
      for (var j = 0; j < entireTopics.length; j++) {
        if (users[k].topics[i] == entireTopics[j]._id) {
          topicNames.push(entireTopics[j].topic);
        }
      }
    }
    obj.device_token = users[k].device_token;
    obj.topics = topicNames;
    obj.user = users[k]._id;
    notification_array.push(obj);
    tokens.push(users[k].device_token);
  }
  console.log(notification_array);

  notification_array.forEach(async notif => {
    let d = new Date();
    let date = d.toJSON().slice(0, 10);
    if (notif.topics.length != 0) {
      try {
        let articles = await fetch(
          'https://newsapi.org/v2/everything?q=' +
            notif.topics.join(' OR ') +
            '&language=en&pageSize=1' +
            '&from=' +
            date,
          {
            headers: {
              'X-API-KEY': 'd4751c0dba364a55a51fcf1fe855730b',
            },
          },
        );
        result = await articles.json();
        console.log(result);
        if (result.status != 'error') {
          notif.news = result.articles[0];

          admin.messaging
            .sendToDevice(notif.device_token, {
              notification: {
                title: 'Timely',
                body: notif.news.title,
              },
              data: {
                body: JSON.stringify(notif.news),
              },
            })
            .then(response => {
              console.log(
                response.successCount + ' messages were sent successfully',
              );
              app
                .service('notifications')
                .patch(notif.user, {
                  $push: {
                    notifications: {
                      $each: [{news: notif.news, read: false}],
                      $position: 0,
                    },
                  },
                })
                .then(() => {
                  console.log('notification added to database');
                })
                .catch(err => {
                  console.log('error in adding notif to db', err);
                });
            })
            .catch(err => console.log(err));
        }
      } catch (err) {
        console.log(err);
      }
    }
  });
};
