import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

const TinderSwiping = () => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text>checker  </Text>
      <Switch
        trackColor={{ false: "#D5DDF9", true: "#D5DDF9" }}
        thumbColor={isEnabled ? "#36E95E" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{toggleSwitch;navigation.navigate("UploadImages")}}
        value={isEnabled}
      />
      <Text>  contribute</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TinderSwiping;
