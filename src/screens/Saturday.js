import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const Saturday = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Saturday is the boys day!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 36,
  },
});

export default Saturday;
