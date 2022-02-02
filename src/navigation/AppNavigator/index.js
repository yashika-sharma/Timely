import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen/index';
import React, {useContext, useState, useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import NotificationsStackScreen from './NotificationsStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import ChangePasswordScreen from '../../screens/AccountScreen/ChangePassword/index';
import TopicsStackScreen from './TopicsStackScreen/index';
import AccountScreen from '../../screens/AccountScreen';
import ChangeEmailScreen from '../../screens/AccountScreen/ChangeEmail/index';
import EditProfile from '../../screens/AccountScreen/EditProfile';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import {rootContext} from '../../context/index';
import messaging from '@react-native-firebase/messaging';
import axios from '../../services/axiosConfig';
import DrawerContent from './DrawerContent';

import ContactUsStackScreen from '../AppNavigator/ContactUsStackScreen';

const HomeDrawer = createDrawerNavigator();

export default (HomeDrawerScreen = () => {
  const {
    user,
    setUser,
    setNotifications,
    notifications,
    fetchNotifications,
  } = useContext(rootContext);
  const [count, setCount] = useState(0);

  const saveTokenToDatabase = async token => {
    await axios
      .patch('/users/' + user._id, {
        device_token: token,
        device_platform: Platform.OS,
      })
      .then(async function(response) {
        setUser(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    await axios
      .patch('/notifications/' + user._id, {
        device_token: token,
      })
      .then(res => {
        setNotifications(res.data.notifications);
      })
      .catch(err =>
        console.log(
          'error in adding it to notifications collection',
          err.response,
        ),
      );
  };

  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        return saveTokenToDatabase(token);
      });
    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      try {
        fetchNotifications();
      } catch (err) {
        console.log(err);
      }
      Alert.alert('A new FCM message arrived!(foreground state)');
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      fetchNotifications();
      console.log('Message handled in the background!', remoteMessage);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const count = notifications.reduce(
      (acc, cur) => (cur.read == false ? ++acc : acc),
      0,
    );
    setCount(count);
  }, [notifications]);

  return (
    <HomeDrawer.Navigator
      drawerContent={props => (
        <DrawerContent {...props} user={user} count={count} />
      )}>
      <HomeDrawer.Screen name="Home" component={HomeScreen} />
      <HomeDrawer.Screen name="Account" component={AccountStackScreen} />
      <HomeDrawer.Screen
        name="Notifications"
        component={NotificationsStackScreen}
      />
      <HomeDrawer.Screen name="Topics" component={TopicsStackScreen} />
      <HomeDrawer.Screen name="ContactUs" component={ContactUsStackScreen} />
    </HomeDrawer.Navigator>
  );
});

const AccountStackNavigator = createStackNavigator();

const AccountStackScreen = ({navigation}) => (
  <AccountStackNavigator.Navigator
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
    <AccountStackNavigator.Screen
      name="Account"
      component={AccountScreen}
      options={{
        title: 'Account',
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
    <AccountStackNavigator.Screen
      name="ChangeEmail"
      component={ChangeEmailScreen}
      options={{
        title: 'Change Email',
      }}
    />
    <AccountStackNavigator.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      options={{
        title: 'Change Password',
      }}
    />
    <AccountStackNavigator.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        title: 'Edit Profile',
      }}
    />
  </AccountStackNavigator.Navigator>
);
