import React, { useState, useEffect } from 'react';
import {
  View,
  Switch,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeArea } from '../../utility/safeArea.component';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const LoadingScreen = () => {
  const navigation = useNavigation();

  // for toggling between checker and contributor
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // for visibility of loading animation
  const [loadingVisible, setLoadingVisible] = useState(true);

  // for visibility of result from model
  const [acceptableVisible, setAcceptableVisible] = useState(false);

  // FOR TESTING ONLY, TO BE REPLACED BY MODEL
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  const getRandomBoolean = () => {
    if (getRandomIntInclusive(0, 1) === 1) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (getRandomBoolean()) {
        setLoadingVisible(false);
        setAcceptableVisible(true);
      } else {
        setLoadingVisible(false);
      }
    }, 5000);
  }, []);

  return (
    <>
      <SafeArea style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hair Length Checker</Text>
        </View>
        <View style={styles.barber}>
          <Image
            style={styles.barberImage}
            source={require('../../../assets/barber.png')}
          />
        </View>
        <View style={styles.spacer}></View>
        <View style={styles.loading}>
          <View style={styles.loadingAnimationContainer}>
            {loadingVisible ? (
              <Progress.CircleSnail
                animating={loadingVisible}
                size={150}
                thickness={10}
                indeterminate={true}
                hidesWhenStopped={true}
              />
            ) : (
              <View style={{ alignItems: 'center' }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Text>Finished loading!</Text>
                </View>
                <View style={styles.result}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.resultText}>
                      {acceptableVisible
                        ? 'Your hair is short enough!'
                        : 'We suggest that you cut your hair to be safe!'}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
        <View style={styles.bottomNavigationBar}>
          <View style={styles.tab}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MainInterface');
              }}
            >
              <Ionicons name="md-home" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.tabText}>Home</Text>
          </View>
          <View style={styles.tab}>
            <Ionicons name="md-notifications" size={30} color="black" />
            <Text style={styles.tabText}>Notifications</Text>
          </View>
          <View style={styles.tab}>
            <Ionicons name="md-help" size={30} color="black" />
            <Text style={styles.tabText}>FAQ</Text>
          </View>
          <View style={styles.tab}>
            <Ionicons name="md-person" size={30} color="black" />
            <Text style={styles.tabText}>Profile</Text>
          </View>
          <View style={styles.tab}>
            <Ionicons name="md-settings" size={30} color="black" />
            <Text style={styles.tabText}>Settings</Text>
          </View>
        </View>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  toggleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerContainer: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 35,
    fontWeight: '700',
  },
  bottomNavigationBar: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    paddingBottom: 5,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 8,
  },
  hairVector: {
    height: 100,
    width: 100,
  },
  barber: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barberImage: {
    width: 100,
    height: 100,
  },
  loading: {
    flex: 10,
    backgroundColor: 'grey',
  },
  spacer: {
    padding: 10,
    backgroundColor: 'white',
  },
  loadingAnimationContainer: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  lottie: {
    width: 250,
    height: 250,
  },
  loadingText: {
    fontSize: 15,
    fontWeight: '400',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultButton: {
    padding: 5,
    backgroundColor: '#0096FF',
  },
  success: {
    flex: 1,
  },
  failure: {
    flex: 1,
  },
  resultText: {
    fontSize: 25,
    fontWeight: '500',
  },
});
