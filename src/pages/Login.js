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
      onPress={() => navigation.navigate(routes.HOME)}
    />
  </View>
);

export default Login;
