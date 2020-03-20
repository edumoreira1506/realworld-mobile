import React from 'react';
import { View, Text, Button } from 'react-native';
import { routes } from '../config/constants';

const Login = ({
  navigation
}) => (
  <View>
    <Text>Login!</Text>
    <Button
      title="Back to home!"
      onPress={() => navigation.goBack()}
    />
    <Button
      title="Back to home with params!"
      onPress={() => navigation.navigate(routes.HOME, { originPage: routes.LOGIN })}
    />
  </View>
);

export default Login;
