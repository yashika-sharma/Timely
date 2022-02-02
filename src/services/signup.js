import axios from './axiosConfig';
import storeAccessToken from './storeAccessToken';
import storeRefreshToken from './storeRefreshToken';
import storeUserId from './storeUserId';
import {Platform} from 'react-native';
import Config from 'react-native-config';

const signup = async (
  values,
  setErrorMessage,
  setUser,
  setEntireTopics,
  setNotifications,
  createComplaintsCollection,
  setLoading,
) => {
  const {email, password} = values;
  const userData = {
    email,
    password,
    fullName: '',
    country: '',
    dateOfBirth: '',
    image: '',
    device_platoform: Platform.OS,
  };

  let config = {
    method: 'post',
    url: Config.BASE_URL + 'users',
    headers: {
      'Content-Type': 'application/json',
    },
    data: userData,
  };

  return await axios(config)
    .then(async function(res) {
      return await axios
        .post(Config.BASE_URL + 'authentication', {
          strategy: 'local',
          email: email,
          password: password,
        })
        .then(async function(res) {
          setUser(res.data.user);
          let allTopics = await axios
            .get('/topics')
            .then(async function(response) {
              return response.data.data;
            })
            .catch(function(error) {
              console.log('error in fetching all topics', error);
            });
          setEntireTopics(allTopics);
          storeRefreshToken(res.data.refreshToken);
          storeUserId(res.data.user._id);
          storeAccessToken(res.data.accessToken);

          let notif = {
            method: 'post',
            url: '/notifications',
            data: {_id: res.data.user._id},
          };
          await axios(notif)
            .then(res => {
              setNotifications(res.data.notifications);
            })
            .catch(err => console.log(err.response));
          createComplaintsCollection(res.data.user._id);
          setLoading(false);
        })
        .catch(function(error) {
          console.log(error);
          setErrorMessage(error.toString());
          setLoading(false);
        });
    })
    .catch(function(error) {
      console.log(error);
      setErrorMessage(error.toString());
      setLoading(false);
    });
};

export default signup;
