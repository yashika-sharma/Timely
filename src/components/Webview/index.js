import React, {useCallback} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper';
import styles from './style';
import colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';

export default (Webview = props => {
  useFocusEffect(
    useCallback(() => {
      props.navigation.setOptions({
        headerLeft: () => (
          <Ionicons.Button
            name="arrow-back-outline"
            size={32}
            backgroundColor={colors.base}
            onPress={() => {
              props.route.params.history
                ? props.navigation.navigate(props.route.params.history)
                : props.navigation.goBack();
            }}
            color={colors.popUpBase}
          />
        ),
      });
    }, []),
  );

  return (
    <WebView
      renderLoading={() => (
        <ActivityIndicator
          style={styles.activity}
          size="large"
          color={colors.unreadBorder}
        />
      )}
      source={{uri: props.route.params.url}}
      startInLoadingState={true}
    />
  );
});
