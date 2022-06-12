import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Login/Login';
import NewUser from './screens/Login/NewUser';
import ForgotPassword from './screens/Login/ForgotPassword';
import MainInterface from './screens/MainInterface/MainInterface';
import TinderSwiping from './screens/Commander/TinderSwiping';
import AcceptableLength from './screens/Hair Length Checker/Screens/AcceptableLength';
import LoadingScreen from './screens/Hair Length Checker/Screens/LoadingScreen';
import UnacceptableLength from './screens/Hair Length Checker/Screens/UnacceptableLength';
import UploadImages from './screens/Hair Length Checker/Screens/UploadImages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="NewUser"
          options={{ headerShown: false }}
          component={NewUser}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{ headerShown: false }}
          component={ForgotPassword}
        />
        <Stack.Screen
          name="MainInterface"
          options={{ headerShown: false }}
          component={MainInterface}
        />
        <Stack.Screen
          name="TinderSwiping"
          options={{ headerShown: false }}
          component={TinderSwiping}
        />
        <Stack.Screen
          name="AcceptableLength"
          options={{ headerShown: false }}
          component={AcceptableLength}
        />
        <Stack.Screen
          name="LoadingScreen"
          options={{ headerShown: false }}
          component={LoadingScreen}
        />
        <Stack.Screen
          name="UnacceptableLength"
          options={{ headerShown: false }}
          component={UnacceptableLength}
        />
        <Stack.Screen
          name="UploadImages"
          options={{ headerShown: false }}
          component={UploadImages}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
