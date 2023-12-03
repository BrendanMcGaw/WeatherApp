import React, { useContext, createContext } from "react";
import { ActivityIndicator, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";
import ScrollRefresh from "./src/components/ScrollRefresh";

export const WeatherContext = createContext();

const App = () => {
  const [loading, error, weather] = useGetWeather();
  console.log(JSON.stringify(weather.city, null, 6) + "More words");

  if (weather && weather.list && !loading) {
    return (
      <WeatherContext.Provider value={{ weather }}>
        <ScrollView refreshControl={ScrollRefresh}>
          <NavigationContainer>
            <Tabs weather={weather} />
          </NavigationContainer>
        </ScrollView>
      </WeatherContext.Provider>
    );
  }
  return (
    <View style={styles.loadingContainer}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
