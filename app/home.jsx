import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const home = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>home</Text>
    <Link href="/">Go back</Link>
  </View>
);

export default home;
