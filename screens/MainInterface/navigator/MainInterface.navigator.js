// Ignore for now

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { SafeArea } from './screens/utility/safeArea.component';
import MainInterface from '../MainInterface';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: 'md-home',
  Notifications: 'md-notifications',
  FAQ: 'md-help',
  Profile: 'md-person',
  Settings: 'md-settings',
};

const Notifications = () => (
  <SafeArea>
    <View style={styles.comingSoon}>
      <Text>Coming Soon!</Text>
    </View>
  </SafeArea>
);

const FAQ = () => (
  <SafeArea>
    <View style={styles.comingSoon}>
      <Text>Coming Soon!</Text>
    </View>
  </SafeArea>
);

const Profile = () => (
  <SafeArea>
    <View style={styles.comingSoon}>
      <Text>Coming Soon!</Text>
    </View>
  </SafeArea>
);

const Settings = () => (
  <SafeArea>
    <View style={styles.comingSoon}>
      <Text>Coming Soon!</Text>
    </View>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function BottomTabNavigator() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={MainInterface} />
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="FAQ" component={FAQ} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  comingSoon: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
