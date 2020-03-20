import React from 'react';
import { View, Text, Button } from 'react-native';
import { routes } from '../config/constants';

const Register = ({
  navigation
}) => (
  <View>
    <Text>Register!</Text>
    <Button
      title="Back to home!"
      onPress={() => navigation.goBack()}
    />
    <Button
      title="Back to home with params!"
      onPress={() => navigation.navigate(routes.HOME, { originPage: routes.REGISTER })}
    />
  </View>
);

export default Register;
