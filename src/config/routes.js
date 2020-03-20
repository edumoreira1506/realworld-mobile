import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from './constants';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import HomePage from '../pages/Home';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={HomePage} />
      <Stack.Screen name={routes.LOGIN} component={LoginPage} />
      <Stack.Screen name={routes.REGISTER} component={RegisterPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
