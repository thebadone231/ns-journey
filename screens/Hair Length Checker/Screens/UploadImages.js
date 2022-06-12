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
import * as ImagePicker from 'expo-image-picker';

const UploadImages = () => {
  const navigation = useNavigation();

  // for toggling between checker and contributor
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // for uploading of haircut
  const [frontImage, setFrontImage] = useState(null);
  const [sideImage, setSideImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickFrontImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setFrontImage(result.uri);
    }
  };

  const pickSideImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSideImage(result.uri);
    }
  };

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
        <View style={styles.guide}>
          <Text style={styles.guideText}>
            Please upload the front and side of your current hair
          </Text>
        </View>
        <View style={styles.uploadContainer}>
          <View style={styles.uploadImage}>
            {frontImage && (
              <Image
                source={{ uri: frontImage }}
                style={{ width: 180, height: 180 }}
              />
            )}
            <View style={styles.spacer}></View>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={pickFrontImage}
            >
              <Text style={styles.buttonText}>FRONT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.uploadImage}>
            {sideImage && (
              <Image
                source={{ uri: sideImage }}
                style={{ width: 180, height: 180 }}
              />
            )}
            <View style={styles.spacer}></View>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={pickSideImage}
            >
              <Text style={styles.buttonText}>SIDE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.uploadButtonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>UPLOAD</Text>
          </TouchableOpacity>
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
  uploadContainer: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  uploadButtonContainer: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
  },
  uploadImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    borderRadius: 8,
    height: 40,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0096FF',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  spacer: {
    padding: 10,
  },
  guide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
  guideText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default UploadImages;
