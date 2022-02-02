import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colors';
import fontSize from '../../../constants/fontSize';
import ContactUs from '../../../screens/ContactUs';
import EditComplaintScreen from '../../../screens/ContactUs/editComplaint';

const ContactUsStackNavigator = createStackNavigator();
let ContactUsStackScreen;
export default (ContactUsStackScreen = ({navigation}) => {
  return (
    <ContactUsStackNavigator.Navigator
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
      <ContactUsStackNavigator.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: 'Contact Us',
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
      <ContactUsStackNavigator.Screen
        name="EditComplaint"
        component={EditComplaintScreen}
        options={{
          title: 'Edit complaint',
        }}
      />
    </ContactUsStackNavigator.Navigator>
  );
});
