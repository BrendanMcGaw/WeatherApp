import React from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { WeatherType } from "../Utilities/WeatherType";

// our app function.
const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temperature,
    feels,
    rangeWrapper,
    range,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temperature}>6</Text>
        <Text style={feels}>Feels like 3</Text>
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
  temperature: {
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
