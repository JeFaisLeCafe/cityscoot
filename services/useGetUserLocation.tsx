import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";

const useGetUserLocation = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return { location, errorMsg };
};

export default useGetUserLocation;
