import AsyncStorage from '@react-native-community/async-storage';

export default (storeUserId = async value => {
  try {
    await AsyncStorage.setItem('@userId', value).then(res => {});
  } catch (e) {
    console.log(e);
  }
});
