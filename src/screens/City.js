// We want this component to access the city location API from open weather corrolating with  the  location of  the weather being predicted.
// Includes:
// City Name
// City Country
// Population
// Sunrise & Sunset times

import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    popCount,
    sunUpDownWrapper,
    sunUpDown,
    rowLayout,
    image,
  } = styles;
  // We destructure the property so that we can easily choose the objects or properties from the API that we wish to target.
  const { name, country, population, sunrise, sunset } = weatherData;

  // Gets the real sunrise time for my local area.
  const sunriseUnixTimestamp = sunrise;
  const sunriseDate = new Date(sunriseUnixTimestamp * 1000);
  const sunriseHours = sunriseDate.getHours();
  const sunriseMinutes = sunriseDate.getMinutes();
  const sunriseSeconds = sunriseDate.getSeconds();

  // Gets the real sunset time for my local area.
  const sunsetUnixTimestamp = sunset;
  // multiply the unix time by 1000 to get the unix time of seconds into milliseconds and then calculate the real time.
  const sunsetDate = new Date(sunsetUnixTimestamp * 1000);
  const sunsetHours = sunsetDate.getHours();
  const sunsetMinutes = sunsetDate.getMinutes();
  const sunsetSeconds = sunsetDate.getSeconds();

  // Properly formatted correct local time
  const sunriseFormattedTime =
    sunriseHours + ":" + sunriseMinutes + ":" + sunriseSeconds;

  // Properly formatted correct local time
  const sunsetFormattedTime =
    sunsetHours + ":" + sunsetMinutes + ":" + sunsetSeconds;

  return (
    <ImageBackground
      source={require("../../assets/city-background.jpg")}
      style={image}
    >
      <SafeAreaView style={container}>
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"Population: " + population}
            bodyTextStyles={popCount}
          />
        </View>
        <View style={[sunUpDownWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={sunriseFormattedTime + " am"}
            bodyTextStyles={sunUpDown}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={sunsetFormattedTime + " pm"}
            bodyTextStyles={sunUpDown}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  cityText: {
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "white",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  popCount: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  sunUpDownWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  sunUpDown: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
