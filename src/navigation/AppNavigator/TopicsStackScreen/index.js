import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopicsScreen from '../../../screens/TopicsScreen/index';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';

const TopicsStackNavigator = createStackNavigator();
export default (TopicsStackScreen = ({navigation}) => (
  <TopicsStackNavigator.Navigator
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
    <TopicsStackNavigator.Screen
      name="Topics"
      component={TopicsScreen}
      options={{
        title: 'Topics',
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
  </TopicsStackNavigator.Navigator>
));
