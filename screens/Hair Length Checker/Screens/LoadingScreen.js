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
import AnimatedLoader from 'react-native-animated-loader';

const LoadingScreen = () => {
  const navigation = useNavigation();

  // for toggling between checker and contributor
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // for visibility of loading animation
  const [loadingVisible, setLoadingVisible] = useState(true);

  // for visibility of result from model
  const [acceptableVisible, setAcceptableVisible] = useState(0);
  const [unacceptableVisible, setUnacceptableVisible] = useState(0);

  // FOR TESTING ONLY, TO BE REPLACED BY MODEL
  const [result, setResult] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setResult(true); //change this to get acceptable/unacceptable results
      if (result === true) {
        setLoadingVisible(false);
        setAcceptableVisible(1);
      } else {
        setLoadingVisible(false);
        setUnacceptableVisible(1);
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
            source={require('../assets/barber.png')}
          />
        </View>
        <View style={styles.spacer}></View>
        <View style={styles.loading}>
          <View style={styles.loadingAnimationContainer}>
            <AnimatedLoader
              visible={loadingVisible}
              overlayColor="rgba(255,255,255,0)"
              source={require('../assets/9844-loading-40-paperplane.json')}
              speed={1}
              animationStyle={styles.lottie}
            >
              <Text style={styles.loadingText}>
                Please wait while our model runs...
              </Text>
            </AnimatedLoader>
          </View>
          <View style={styles.result}>
            <View style={{ opacity: acceptableVisible, flex: 1 }}>
              <Text style={styles.resultText}>Your hair is short enough!</Text>
            </View>
            <View style={{ opacity: unacceptableVisible, flex: 1 }}>
              <Text style={styles.resultText}>
                We suggest that you cut your hair to be safe!
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.toggleContainer}>
          <Text>checker </Text>
          <Switch
            trackColor={{ false: '#D5DDF9', true: '#D5DDF9' }}
            thumbColor={isEnabled ? '#36E95E' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              toggleSwitch;
              navigation.navigate('TinderSwiping');
            }}
            value={isEnabled}
          />
          <Text> contribute</Text>
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
