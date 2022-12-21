import { StatusBar } from "expo-status-bar";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import useGetRandomPlaces from "../services/useGetRandomPlaces";
import useGetUserLocation from "../services/useGetUserLocation";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import LocationCard from "../components/LocationCard";

const Map = () => {
  const { location: userLocation } = useGetUserLocation();

  const { data } = useGetRandomPlaces();
  return (
    <>
      <StatusBar style="dark" />
      <Container>
        {userLocation?.timestamp ? (
          <MapView
            region={{
              latitude: userLocation?.coords.latitude,
              longitude: userLocation.coords.longitude,
              latitudeDelta: 2,
              longitudeDelta: 2
            }}
            mapType="standard"
            style={styles.map}
            showsUserLocation
            // followsUserLocation
            showsMyLocationButton
            userLocationCalloutEnabled>
            {data.map((marker) => (
              <Marker
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}>
                <LocationCard location={marker}></LocationCard>
              </Marker>
            ))}
          </MapView>
        ) : (
          <ActivityIndicator size={"large"} color={colors.secondary} />
        )}
      </Container>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
