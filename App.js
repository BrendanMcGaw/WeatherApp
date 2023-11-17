import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { TEST_KEY } from "@env";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  console.log(TEST_KEY);
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

  useEffect(() => {
    // While waiting for permission (Async allows task to pause and do other tasks) it will continue to load geolocation.
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })(); // immediate invoking on function we put () afterwards.
  }, []); // Empty array is for the dependencies. This allows the useEffect to only run once when the component is first run.

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
