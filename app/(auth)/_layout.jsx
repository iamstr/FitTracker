import { Stack } from 'expo-router';
import React from 'react';
import UserContextProvider from '../../contexts/userContext';

function Auth() {
  return (
    <UserContextProvider>

      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerShadowVisible: false,
        headerShown: false,
      }}
      >
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="complete-signup" />
        <Stack.Screen name="metrics" />
        <Stack.Screen name="goal" />
        <Stack.Screen
          name="activity"
          options={{
            headerShown: false,
            title: 'choose activity',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
          }}
        />
      </Stack>
    </UserContextProvider>
  );
}

export default Auth;
