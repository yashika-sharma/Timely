import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/navigation';
import SplashScreen from 'react-native-splash-screen';
import RootContextProvider from './src/context/index';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootContextProvider>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </RootContextProvider>
    </Provider>
  );
};

export default App;
