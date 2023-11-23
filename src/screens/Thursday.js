import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const Thursday = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Its Thursday Curseday</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  text: {
    fontSize: 36,
  },
});

export default Thursday;
