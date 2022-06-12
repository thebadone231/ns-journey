import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { SafeArea } from '../utility/safeArea.component';
import { Ionicons } from '@expo/vector-icons';

const MainInterface = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeArea style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.functions}>
          <View style={styles.welcomeHeader}>
            <Text style={styles.textHeader}>Welcome back, 3SG John Tan</Text>
          </View>
          <View style={styles.featureRow}>
            <View style={styles.feature}>
              <Image
                style={styles.tinyLogo}
                source={require('../MainInterface/assets/emart.png')}
              />
              <Text style={styles.tinyLogoText}>Emart</Text>
            </View>
            <View style={styles.feature}>
              <Image
                style={styles.tinyLogo}
                source={require('../MainInterface/assets/weightlifting.png')}
              />
              <Text style={styles.tinyLogoText}>IPPT</Text>
            </View>
            <View style={styles.feature}>
              <Image
                style={styles.tinyLogo}
                source={require('../MainInterface/assets/mobile-phone.png')}
              />
              <Text style={styles.tinyLogoText}>Date Ideas</Text>
            </View>
            <View style={styles.feature}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UploadImages');
                }}
              >
                <Image
                  style={styles.tinyLogo}
                  source={require('../MainInterface/assets/man-hair.png')}
                />
              </TouchableOpacity>
              <Text style={styles.tinyLogoText}>Hair Length Checker</Text>
            </View>
          </View>
          <View style={styles.featureRow}>
            <View style={styles.feature}>
              <Image
                style={styles.tinyLogo}
                source={require('../MainInterface/assets/light-bulb.png')}
              />
              <Text style={styles.tinyLogoText}>Tips</Text>
            </View>
            <View style={styles.feature}>
              <Image
                style={styles.tinyLogo}
                source={require('../MainInterface/assets/weather.png')}
              />
              <Text style={styles.tinyLogoText}>Weather</Text>
            </View>
            <View style={styles.feature}>
              <Image
                style={styles.tinyLogo}
                source={require('../MainInterface/assets/calendar.png')}
              />
              <Text style={styles.tinyLogoText}>Calendar</Text>
            </View>
            <View style={styles.feature}>
              <Image
                style={styles.tinyLogo}
                source={require('../MainInterface/assets/budget.png')}
              />
              <Text style={styles.tinyLogoText}>Budget Planner</Text>
            </View>
          </View>
        </View>
        <View style={styles.ordCountdown}>
          <View style={styles.ordCountdownHeader}>
            <Text style={styles.countdownText}>ORD Countdown</Text>
          </View>
          <View style={styles.daysToORD}>
            <Text style={styles.daysToORDText}>
              <Text style={{ color: 'green' }}>79</Text> days
            </Text>
          </View>
        </View>
        <View style={styles.holiday}>
          <View style={styles.holidayHeader}>
            <Text style={styles.holidayHeaderText}>Next Public Holiday</Text>
          </View>
          <View style={styles.publicHoliday}>
            <Image
              style={styles.holidayIcon}
              source={require('../MainInterface/assets/hari-raya-haji.png')}
            />
            <Text style={styles.holidayText}>Hari Raya Haji 10 July 2022</Text>
          </View>
        </View>
        <View style={styles.bottomNavigationBar}>
          <View style={styles.tab}>
            <Ionicons name="md-home" size={30} color="black" />
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
    paddingBottom: 16,
  },
  ordCountdown: {
    flex: 6,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 15,
  },
  bottomNavigationBar: {
    flex: 1.5,
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcomeHeader: {
    flex: 1,
    padding: 10,
  },
  featureRow: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '600',
  },
  holiday: {
    flex: 4,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  feature: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  tinyLogo: {
    height: 60,
    width: 60,
  },
  tinyLogoText: {
    paddingTop: 5,
    fontSize: 12,
  },
  ordCountdownHeader: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  countdownText: {
    fontSize: 15,
    fontWeight: '500',
  },
  daysToORD: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  daysToORDText: {
    fontSize: 70,
    fontWeight: '700',
  },
  holidayHeader: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  holidayHeaderText: {
    fontSize: 15,
    fontWeight: '500',
  },
  publicHoliday: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: -30,
    paddingBottom: 16,
  },
  holidayIcon: {
    height: 40,
    width: 40,
  },
  holidayText: {
    fontSize: 21,
    fontWeight: '500',
  },
  tab: {
    flex: 1,
    paddingBottom: 5,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 8,
  },
});

// source of icons
// https://www.flaticon.com/authors/dinosoft/circular?author_id=205
