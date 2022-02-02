import storeRefreshToken from './storeRefreshToken';
import storeUserId from './storeUserId';
import storeAccessToken from './storeAccessToken';
import axios from './axiosConfig';

const login = async (
  values,
  setErrorMessage,
  setUser,
  setEntireTopics,
  fetchComplaints,
  setLoading,
) => {
  const setData = async res => {
    setUser(res.user);
    await axios.get('/topics').then(async function(response) {
      setEntireTopics(response.data.data);
    });
    fetchComplaints(res.user._id);
  };
  const {email, password} = values;

  var data = JSON.stringify({
    strategy: 'local',
    email: email,
    password: password,
  });

  var config = {
    method: 'post',
    url: '/authentication',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return await axios(config)
    .then(async function(res) {
      await setData(res.data);
      storeRefreshToken(res.data.refreshToken);
      storeUserId(res.data.user._id);
      storeAccessToken(res.data.accessToken);
      setLoading(false);
    })
    .catch(function(error) {
      console.log(error);
      setErrorMessage(error.toString());
      setLoading(false);
    });
};

export default login;
