import React from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { WeatherType } from "../Utilities/WeatherType";

// our app function.
const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    rangeWrapper,
    range,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  console.log(JSON.stringify(weatherData, null, 6));
  console.log(weatherData.main.temp);
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: WeatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={WeatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{weatherData.main.temp}</Text>
        <Text style={feels}>Feels like {weatherData.main.feels_like}</Text>
        {/* Refering to RowText component to create inputs. */}
        <RowText
          messageOne={"High: 8"}
          messageTwo={"Low: 6"}
          containerStyles={rangeWrapper}
          messageOneStyles={range}
          messageTwoStyles={range}
        />
      </View>
      <RowText
        messageOne={WeatherType["Thunderstorm"].icon}
        messageTwo={WeatherType["Thunderstorm"].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  range: {
    color: "black",
    fontSize: 16,
    fontStyle: "italic",
  },
  rangeWrapper: {
    flexDirection: "row",
    gap: 5,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
