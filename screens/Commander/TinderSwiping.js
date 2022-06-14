import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text, Image, ActivityIndicator, TouchableOpacity, StatusBar, Platform,} from "react-native";
import { useNavigation } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import AwesomeAlert from 'react-native-awesome-alerts';
import { db } from '../../services/Firebase';
import {getDocs, collection} from 'firebase/firestore';

import { SafeArea } from '../utility/safeArea.component';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const TinderSwiping = () => {
  const navigation = useNavigation();

  // for uploading of haircut
  const [frontImage, setFrontImage] = useState(null);
  const [sideImage, setSideImage] = useState(null);

  //for swiping
  const [picCount, setPicCount] = useState(1);
  const [imageData, setImageData] = useState({});
  const [renderState, setRenderState] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [alert, setAlert] = useState(true);



  //for uploading images
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


  //for swiping
  const imageDocRef = collection(db, 'images/')
  const onSwipe = (gestureName) => {
    if (gestureName === 'SWIPE_RIGHT') {
      setPicCount(picCount+1)
    } else if (gestureName === 'SWIPE_LEFT') {
      setPicCount(picCount+1)
    }
  };
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const call = (file_name) => {
    let res;
    switch (file_name) {
      case 'image1':
      return require('../../assets/image1.png');
      case 'image2':
      return require('../../assets/image2.png');
      case 'image3':
      return require('../../assets/image3.png');
      case 'image4':
      return require('../../assets/image4.png');
      case 'image5':
      return require('../../assets/image5.png');
      case 'image6':
      return require('../../assets/image6.png');
      case 'image7':
      return require('../../assets/image7.png');
      case 'image8':
      return require('../../assets/image8.png');
      case 'image9':
      return require('../../assets/image9.png');
      case 'image10':
      return require('../../assets/image10.png');
      case 'image11':
      return require('../../assets/image11.png');
    }
    return res
  }

  useEffect(()=>{

    const image_upload = async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
      console.log('lol');
    };

    const getData = async() =>{
      const images = await getDocs(imageDocRef);
      let imageDict = {};
      images.forEach((doc)=>{imageDict[doc.id] = doc.data()});
      setImageData(imageDict);
      console.log('2');
    }

    isEnabled ? 
    getData().then(setRenderState(true)).catch(console.error) :
    image_upload();
  
  }, [isEnabled]) 
  

  let display = 
  <View style={{height:'100%', width:'100%'}}>
    <View style={{...styles.guide, justifyContent:'flex-end'}}>
      <Text style={styles.guideText}>
        Please upload the front and side of your current hair
      </Text>
    </View>
    <View style={styles.uploadContainer}>
      <View style={styles.uploadImage}>
        {frontImage && (<Image source={{ uri: frontImage }} style={{ width: 180, height: 180 }}/>)}
      <View style={styles.spacer}></View>
        <TouchableOpacity style={styles.uploadButton} onPress={pickFrontImage}>
          <Text style={styles.buttonText}>FRONT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.uploadImage}>
        {sideImage && (
          <Image source={{ uri: sideImage }} style={{ width: 180, height: 180 }}/>)}
        <View style={styles.spacer}></View>
        <TouchableOpacity style={styles.uploadButton} onPress={pickSideImage}>
          <Text style={styles.buttonText}>SIDE</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.uploadButtonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('LoadingScreen');}}>
        <Text style={styles.buttonText}>UPLOAD</Text>
      </TouchableOpacity>
    </View>
  </View>
  
  if (isEnabled === true) {
    let picture;
    if (renderState === true && Object.keys(imageData).length !== 0) {
      const array = Object.keys(imageData)
      const list_length = array.length
      const image_ID = array[Math.floor(Math.random() * (list_length))]
      console.log(image_ID)
      picture = <Image style= {{width:200, height:250, }} source={call(image_ID)}/>
    } else {
      console.log(renderState)
      picture = 
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <ActivityIndicator size="large" />
        <Text>loading image</Text>
      </View>
    }
    display = 
    <GestureRecognizer onSwipe={onSwipe} >
          <View style={{width:'100%', height:'100%', flexDirection:'row'}}>
            <View style={{flex:4, justifyContent:'center', alignItems:'flex-end'}}>
              <Image style= {{width: 50, height: 50,}} source={require('../../assets/left3--v2.png')} />
              <Text style={{fontSize:15, fontWeight:'600'}}>Swipe{'\n'}left to{'\n'}reject</Text>
            </View>

            <View style={{flex:15, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:'90%',borderWidth:2, height:'65%', justifyContent:'center', alignItems: 'center'}}>
              {picture}
              </View>
              <Text style={{fontWeight:'700', fontSize:20, marginTop: 25}}>Image {picCount} / 10 </Text>
            </View>

            <View style={{flex:4, justifyContent:'center', alignItems:'flex-start'}}>
              <Image style= {{width: 50, height: 50,}} source={require('../../assets/right3.png')} />
              <Text style={{fontSize:15, fontWeight:'600'}}>Swipe{'\n'}right to{'\n'}accept</Text>
            </View>
          </View>
    </GestureRecognizer>
  }

  return (
  <>
    <SafeArea style={{flex: 1, marginTop: StatusBar.currentHeight, alignItems: 'center', backgroundColor: 'white'}}> 

      <View style={{flex:15, width:'100%', justifyContent:'flex-end', alignItems:'center'}}>
        <Text style={{fontWeight:'500', fontSize: 35, }}>Hair Length Checker</Text>
        <Image style={styles.barberImage}
        source={require('../../assets/barber.png')} />
      </View> 


      <View style={{flex:32, width:'100%',}}>
        {display}
      </View>


      <View style={{flex:4, ...styles.toggle}}>
        <Text>Checker  </Text>
        <Switch
          trackColor={{ false: "#D5DDF9", true: "#D5DDF9" }}
          thumbColor={isEnabled ? "#36E95E" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={()=>{setIsEnabled(!isEnabled);console.log(isEnabled)}}
          value={isEnabled}
        />
        <Text>  Contribute</Text>
      </View>


      <View style={{flex:4, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-end'}}>
        <View style={styles.tab}>
            <TouchableOpacity onPress={() => {navigation.navigate('MainInterface');}}>
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

      {picCount >= 11 && <AwesomeAlert
        show={alert}
        title="Thank you"
        message="3 emart credits will be added to your account for your contributions"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        cancelText="Close"
        onCancelPressed={() => {
          setAlert(false);
          navigation.navigate('MainInterface')}}/>
      }

    </SafeArea>
    <ExpoStatusBar style="auto" />
  </>
  );
};

const styles = StyleSheet.create({
  toggle: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  }, 
  imageDimension: {
    width: 100,
    height: 90,
    marginTop:13
  },
  bottomNavigationBar: {
    flex: 1.5,
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
  barberImage: {
    width: 100,
    height: 100,
    marginTop:14,
  },
  spacer: {
    padding: 10,
    backgroundColor: 'white',
  },
  guide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  guideText: {
    fontSize: 15,
    fontWeight: '500',
  },
  uploadContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
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
  uploadImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
  },
  uploadButtonContainer: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TinderSwiping;
