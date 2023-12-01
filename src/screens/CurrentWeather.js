import React from "react";
import { Video } from "expo-av";
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
    bolden,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: WeatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      {/* We enable a dynamic source changes by placing the "require(file)" section in the actual WeatherType condition objects. */}
      <Video
        source={WeatherType[weatherCondition].video}
        style={styles.backgroundVideo}
        resizeMode={"cover"}
        shouldPlay={true}
        isLooping={true}
      />
      <View style={container}>
        <Feather
          name={WeatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={[tempStyles, bolden]}>{temp}°</Text>
        <Text style={[feels, bolden]}>{`Feels like ${feels_like}°`}</Text>
        {/* Refering to RowText component to create inputs. */}
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={rangeWrapper}
          messageOneStyles={[range, bolden]}
          messageTwoStyles={[range, bolden]}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={WeatherType[weatherCondition]?.message} // Choosing to use the main name under the weather API and matches it to our weatherType and pulls the message from the type of weather.
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
  },
  bolden: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
    color: "white",
    fontSize: 48,
  },
  feels: {
    color: "white",
    fontSize: 30,
  },
  range: {
    color: "white",
    fontSize: 16,
    fontStyle: "italic",
  },
  rangeWrapper: {
    flexDirection: "row",
    gap: 15,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 8,
    marginBottom: 25,
  },
  description: {
    color: "white",
    fontSize: 16,
  },
  message: {
    color: "white",
    fontSize: 24,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default CurrentWeather;
