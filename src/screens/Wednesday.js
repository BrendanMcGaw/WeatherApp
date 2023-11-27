import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

const Wednesday = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>It is Wednesday, my dudes.</Text>
      <ListItem></ListItem>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  text: {
    fontSize: 36,
  },
});

export default Wednesday;
