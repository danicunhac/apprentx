import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardDate from '../pages/OnboardDate';
import OnboardCar from '../pages/OnboardCar';
import OnboardWelcome from '../pages/OnboardWelcome';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="OnboardDate" component={OnboardDate} />
    <Auth.Screen name="OnboardCar" component={OnboardCar} />
    <Auth.Screen name="OnboardWelcome" component={OnboardWelcome} />
    {/* Authorization Routes */}
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
