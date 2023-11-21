import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0]?.main}
      dt_txt={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
  );
  const { container, image } = styles;
  return (
    <ImageBackground
      source={require("../../assets/thunderstorm-3625405_1920.jpg")}
      style={image}
    >
      <SafeAreaView style={container}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  // Allows our image to fill the entire background on the page.
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
