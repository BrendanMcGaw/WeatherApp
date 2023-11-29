import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import moment from "moment";

const Monday = ({ weatherData }) => {
  console.log(weatherData.dt_txt);
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0]?.main}
      dt_txt={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
  );
  const { container } = styles;
  // if (moment(weatherData.dt_txt).format("dddd") == "Monday") {
  const dayName = moment(weatherData[0].dt_txt).format("dddd");
  // weatherData[0].dt_txt;
  // const day1 = dayName.getDay();
  console.log(dayName);
  // length of weatherData = 40. Iterate through i++ until == 40 and check each day to find all days that are the same and then render only those days datas.
  console.log(weatherData.length);
  return (
    <SafeAreaView style={container}>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  image: {
    flex: 1,
  },
});

export default Monday;
