import AsyncStorage from '@react-native-community/async-storage';

export default (storeAccessToken = async value => {
  try {
    await AsyncStorage.setItem('@feathers-jwt', value).then(() => {});
  } catch (e) {
    console.log('error in storing accesstoken', e);
  }
});
