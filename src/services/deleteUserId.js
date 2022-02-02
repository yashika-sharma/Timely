import AsyncStorage from '@react-native-community/async-storage';

export default (deleteUserId = async () => {
  try {
    await AsyncStorage.removeItem('@userId');
  } catch (e) {
    console.log('error in deleting userId token', e);
  }
});
