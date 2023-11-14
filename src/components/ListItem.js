import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, dt, temp } = styles;
  return (
    <View style={item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={dt}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 15,
  },
  dt: {
    color: "white",
    fontSize: 12,
  },
});

export default ListItem;
