import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationsScreen from '../../../screens/Notifications';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';
import Webview from '../../../components/Webview';

const NotificationsStackNavigator = createStackNavigator();
export default (NotificationsStackScreen = ({navigation}) => {
  return (
    <NotificationsStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.base,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.popUpBase,
          fontSize: fontSize.l,
        },
      }}>
      <NotificationsStackNavigator.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notifications',
          headerLeft: () => (
            <Ionicons.Button
              name="ios-menu"
              size={28}
              backgroundColor={colors.base}
              onPress={() => navigation.openDrawer()}
              color={colors.popUpBase}
            />
          ),
        }}
      />
      <NotificationsStackNavigator.Screen
        name="NotificationItem"
        component={Webview}
        options={{title: ''}}
      />
    </NotificationsStackNavigator.Navigator>
  );
});
