import React, { useEffect } from 'react';
import { ScrollView, View, Text, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { AppContainer, Logo } from './styles/app';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <AppContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1B1B1F" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Logo>
          <Text>rentx</Text>
        </Logo>
      </ScrollView>
    </AppContainer>
  );
};

export default App;
