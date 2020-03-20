import React from 'react';
import { View, Text, Button } from 'react-native';
import { routes } from '../config/constants';

const Home = ({
  navigation
}) => (
  <View>
    <Text>Home!</Text>
    <Button
      title="Go to login!"
      onPress={() => navigation.navigate(routes.LOGIN)}
    />
    <Button
      title="Go to register!"
      onPress={() => navigation.navigate(routes.REGISTER)}
    />
  </View>
);

export default Home;
