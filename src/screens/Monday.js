import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Monday = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
});

export default Monday;
