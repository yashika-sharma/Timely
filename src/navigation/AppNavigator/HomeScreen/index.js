import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsScreen from '../../../screens/NewsScreen/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import RSSStackScreen from '../RSSStackScreen/index';
import Webview from '../../../components/Webview';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';
import spacing from '../../../constants/spacing';
import messaging from '@react-native-firebase/messaging';

const HomeTab = createBottomTabNavigator();
const NewsStackNavigator = createStackNavigator();

const NewsStackScreen = ({navigation}) => (
  <NewsStackNavigator.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.base,
      },
      headerTintColor: colors.popUpBase,
      headerTitleStyle: {
        fontWeight: 'bold',
        color: colors.popUpBase,
        fontSize: fontSize.l,
      },
    }}>
    <NewsStackNavigator.Screen
      name="News"
      component={NewsScreen}
      options={{
        title: 'News',
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
    <NewsStackNavigator.Screen
      name="NewsItem"
      component={Webview}
      options={{title: ''}}
    />
  </NewsStackNavigator.Navigator>
);

export default (HomeScreen = () => {
  return (
    <HomeTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.baseDark,
        inactiveTintColor: colors.white,
        labelStyle: {
          fontSize: fontSize.ml,
          margin: 0,
        },
        style: {
          backgroundColor: colors.base,
        },
      }}>
      <HomeTab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color}) => (
            <Ionicons
              name="newspaper"
              color={color}
              size={25}
              style={{marginTop: spacing.m}}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="RSS"
        component={RSSStackScreen}
        options={{
          tabBarLabel: 'RSS',
          tabBarIcon: ({color}) => (
            <Ionicons
              name="logo-rss"
              color={color}
              size={24}
              style={{marginTop: spacing.m}}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
});
