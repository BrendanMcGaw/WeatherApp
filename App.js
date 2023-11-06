import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

// our app function.
const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.temperature}>6</Text>
        <Text style={styles.feels}>Feels like 3</Text>
        <View style={styles.rangeWrapper}>
          <Text style={styles.range}>High: 8</Text>
          <Text style={styles.range}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1, 
    alignItems: "center",
  },
  currentWeather: {
    color: "black",
    fontSize: 62
  },
  temperature: {
    color:  "black",
    fontSize: 48
  },
  feels: {
    color: "black",
    fontSize: 30
  },
  range: {
    color: "black",
    fontSize: 16,
    fontStyle: "italic"
  },
  rangeWrapper: {
    flexDirection: "row",
    gap: 5
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
  
})
export default App

