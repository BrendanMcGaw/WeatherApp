import React, { createContext, useContext } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Monday from "../screens/Monday";
import Tuesday from "../screens/Tuesday";
import Wednesday from "../screens/Wednesday";
import Thursday from "../screens/Thursday";
import Friday from "../screens/Friday";
import Saturday from "../screens/Saturday";
import Sunday from "../screens/Sunday";
import UpcomingWeather from "../screens/UpcomingWeather";

const Stack = createNativeStackNavigator();

// TODO::: SETUP DATA PASSING --- REFER BACK TO TABS.JS for an example of how to do this with our API data.
const UpcomingStack = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <Stack.Navigator
      screenOptions={{
        animationDuration: 5,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Upcoming Weather"
        component={UpcomingWeather}
      />
      <Stack.Screen name="Monday">
        {(props) => <Monday {...props} weatherData={weatherData} />}
      </Stack.Screen>
      {/* Clearly something wrong with my code, dunno how to pass this object to my screens. FUck! */}
      <Stack.Screen name="Tuesday" component={Tuesday} />
      <Stack.Screen name="Wednesday" component={Wednesday} />
      <Stack.Screen name="Thursday" component={Thursday} />
      <Stack.Screen name="Friday" component={Friday} />
      <Stack.Screen name="Saturday" component={Saturday} />
      <Stack.Screen name="Sunday" component={Sunday} />
    </Stack.Navigator>
  );
};

export default UpcomingStack;
