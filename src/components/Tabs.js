import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingStack from "./UpcomingStack";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#818589",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "white"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        component={UpcomingStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "white"}
            />
          ),
        }}
      >
        {/* {() => <UpcomingWeather weatherData={weather.list} />} */}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "white"}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
