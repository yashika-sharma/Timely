import axios from './axiosConfig';
import AsyncStorage from '@react-native-community/async-storage';
import storeAccessToken from './storeAccessToken';

export const getData = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('@refreshToken');
    const userId = await AsyncStorage.getItem('@userId');

    if (refreshToken !== null && userId !== null) {
      return {refreshToken: refreshToken, userId: userId};
    }
  } catch (e) {
    console.log(e);
    return;
  }
};

export default (refreshToken = async () => {
  let {refreshToken, userId} = await getData();

  return await axios
    .post('/refresh-tokens', {_id: userId, refreshToken: refreshToken})
    .then(async function(response) {
      await storeAccessToken(response.data.accessToken);
      return response.data.accessToken;
    })
    .catch(err => {
      console.log('error in axios', err);
    });
});
