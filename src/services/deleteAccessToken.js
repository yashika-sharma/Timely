import AsyncStorage from '@react-native-community/async-storage';

export default (deleteAccessToken = async () => {
  try {
    await AsyncStorage.removeItem('@feathers-jwt');
  } catch (e) {
    console.log('error in deleting access token', e);
  }
});
