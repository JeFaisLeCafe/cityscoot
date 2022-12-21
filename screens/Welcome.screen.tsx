import { StatusBar } from "expo-status-bar";

import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
const Welcome = () => {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
