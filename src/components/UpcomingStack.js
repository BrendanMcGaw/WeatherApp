import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { NavigationContainer, navigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Monday from "../screens/Monday";
import Tuesday from "../screens/Tuesday";
import UpcomingWeather from "../screens/UpcomingWeather";

const Stack = createNativeStackNavigator();
// TODO::: SETUP DATA PASSING --- REFER BACK TO TABS.JS for an example of how to do this with our API data.
const UpcomingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Upcoming Weather" component={UpcomingWeather} />
      <Stack.Screen name="Monday" component={Monday} />
      <Stack.Screen name="Tuesday" component={Tuesday} />
      {/* <Stack.Screen name="Wednesday" component={Wednesday} />
      <Stack.Screen name="Thursday" component={Thursday} />
      <Stack.Screen name="Friday" component={Friday} />
      <Stack.Screen name="Saturday" component={Saturday} />
      <Stack.Screen name="Sunday" component={Sunday} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default UpcomingStack;
