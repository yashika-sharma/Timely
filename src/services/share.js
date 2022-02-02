import Share from 'react-native-share';

export default (share = url => {
  Share.open({
    url: url,
    message: url,
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      err && console.log(err);
    });
});
