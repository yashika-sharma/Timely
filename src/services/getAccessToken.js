import AsyncStorage from '@react-native-community/async-storage';

export default (getAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('@feathers-jwt');
    if (accessToken !== null) {
      return accessToken;
    }
  } catch (e) {
    console.log(e);
  }
});
