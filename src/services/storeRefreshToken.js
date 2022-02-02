import AsyncStorage from '@react-native-community/async-storage';

export default (storeRefreshToken = async value => {
  try {
    await AsyncStorage.setItem('@refreshToken', value).then(res => {});
  } catch (e) {
    console.log(e);
  }
});
