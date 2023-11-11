import React from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

// our app function.
const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
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
    marginTop: StatusBar.currentHeight || 0
  },
  container: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center"
  },
  temperature: {
    color:  "black",
    fontSize: 48,
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
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
  
})
export default CurrentWeather