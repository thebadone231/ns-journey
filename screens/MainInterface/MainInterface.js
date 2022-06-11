import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';

const MainInterface = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.functions}>
          <View style={styles.welcomeHeader}>
            <Text style={styles.textHeader}>Welcome back</Text>
          </View>
          <View style={styles.featureRow}>
            <Text>Buttons</Text>
          </View>
          <View style={styles.featureRow}>
            <Text>Buttons</Text>
          </View>
        </View>
        <View style={styles.ordCountdown}>
          <Text>ORD Countdown</Text>
        </View>
        <View style={styles.bottomNavigationBar}>
          <Text>Bottom Navigation Bar</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default MainInterface;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  functions: {
    flex: 10,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'blue',
  },
  ordCountdown: {
    flex: 10,
    padding: 16,
    backgroundColor: 'green',
  },
  bottomNavigationBar: {
    flex: 1,
    padding: 16,
    backgroundColor: 'yellow',
  },
  welcomeHeader: {
    flex: 1,
    padding: 10,
    backgroundColor: 'yellow',
  },
  featureRow: {
    flex: 3,
    padding: 16,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '600',
  },
});
