import React from 'react';
import RssScreen from '../../../screens/RssScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import RssDetailScreen from '../../../screens/RssScreen/RssDetailScreen';
import Webview from '../../../components/Webview/index';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';

const RSSStackNavigator = createStackNavigator();
const RSSStackScreen = ({navigation}) => {
  return (
    <RSSStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.base,
        },
        headerTintColor: colors.popUpBase,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.popUpBase,
          fontSize: fontSize.sl,
        },
      }}>
      <RSSStackNavigator.Screen
        name="RSS"
        component={RssScreen}
        options={{
          title: 'RSS',
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
      <RSSStackNavigator.Screen
        name="RssDetail"
        component={RssDetailScreen}
        options={({route}) => ({title: route.params.name})}
      />
      <RSSStackNavigator.Screen
        name="RssDetailItem"
        component={Webview}
        options={{title: ''}}
      />
    </RSSStackNavigator.Navigator>
  );
};

export default RSSStackScreen;
