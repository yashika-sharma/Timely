import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignInScreen from '../../screens/AuthScreens/SignIn';
import SignUpScreen from '../../screens/AuthScreens/SignUp';

const AuthStack = createStackNavigator();
export default (AuthNavigatorScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </AuthStack.Navigator>
  );
});
