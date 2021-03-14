import React, { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AppContainer } from './styles/app';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AppContainer>
        <Routes />
      </AppContainer>
    </NavigationContainer>
  );
};

export default App;
