import React from 'react'

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import OnBoarding from './src/screens/OnBoarding';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
        
      }}>
        <Stack.Screen name="OnBoarding"  component={OnBoarding} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
