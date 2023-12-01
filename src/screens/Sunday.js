import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const Sunday = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SUNDAY, SUNDAY, SUNDAY!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 36,
  },
});

export default Sunday;
