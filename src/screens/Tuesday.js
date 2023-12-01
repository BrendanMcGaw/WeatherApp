import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tuesday = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World 2.0!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  text: {
    color: "black",
    fontSize: 36,
  },
});

export default Tuesday;
