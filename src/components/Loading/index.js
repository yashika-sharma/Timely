import React from 'react';
import styles from './style';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../../constants/colors';
export default (Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.base} />
    </View>
  );
});
