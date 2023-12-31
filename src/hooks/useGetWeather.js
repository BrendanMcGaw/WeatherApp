import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  console.log("This is the latitude" + lat + " " + lon);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError("Could not fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // While waiting for permission (Async allows task to pause and do other tasks) it will continue to load geolocation.
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
      console.log(JSON.stringify(weather, null, 6));
    })(); // immediate invoking on function we put () afterwards.
  }, [lat, lon]); // Array is for the dependencies. This allows the useEffect to only run once when the component is first run.
  return [loading, error, weather];
};
