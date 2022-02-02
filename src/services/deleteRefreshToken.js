import AsyncStorage from '@react-native-community/async-storage';

export default (deleteRefreshToken = async () => {
  try {
    await AsyncStorage.removeItem('@refreshToken');
  } catch (e) {
    console.log('error in deleting refresh token', e);
  }
});
