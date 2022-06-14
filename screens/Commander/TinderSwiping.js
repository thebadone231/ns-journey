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

  const [picCount, setPicCount] = useState(1);
  const [imageData, setImageData] = useState({});
  const [renderState, setRenderState] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [alert, setAlert] = useState(true);


  const imageDocRef = collection(db, 'images/')
  const onSwipe = (gestureName) => {
    if (gestureName === 'SWIPE_RIGHT') {
      setPicCount(picCount+1)
    } else if (gestureName === 'SWIPE_LEFT') {
      setPicCount(picCount+1)
    }
  };
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(()=>{
    const getData = async() =>{
      const images = await getDocs(imageDocRef);
      let imageDict = {};
      images.forEach((doc)=>{imageDict[doc.id] = doc.data()});
      setImageData(imageDict);
    }
    getData().then(setRenderState(true)).catch(console.error);

    
  
  }, []) 

  let picture;
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
  if (renderState === true && Object.keys(imageData).length !== 0) {
    array = Object.keys(imageData)
    list_length = array.length
    const image_ID = array[Math.floor(Math.random() * (list_length))]
    console.log(image_ID)
    picture = <Image style= {{width:200, height:250, }} source={call(image_ID)}/>
  } else {
    picture = 
    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <ActivityIndicator size="large" />
      <Text>loading image</Text>
    </View>
  }


  let component;
  if (isEnabled === true) {
    component = <View><Text>ello</Text></View>
  } else {
    component = <View><Text>nehhhh</Text></View>
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
      </View>


      <View style={{flex:4, ...styles.toggle}}>
        <Text>Checker  </Text>
        <Switch
          trackColor={{ false: "#D5DDF9", true: "#D5DDF9" }}
          thumbColor={isEnabled ? "#36E95E" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
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
});

export default TinderSwiping;
