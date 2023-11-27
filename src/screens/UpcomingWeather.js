import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
  Text,
  Button,
} from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/thunderstorm-3625405_1920.jpg")}
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <Button
          title="Go to Monday."
          onPress={() => navigation.navigate("Monday")}
        />
        <Button
          title="Go to Tuesday."
          onPress={() => navigation.navigate("Tuesday")}
        />
        <Button
          title="Go to Wednesday."
          onPress={() => navigation.navigate("Wednesday")}
        />
        <Button
          title="Go to Thursday."
          onPress={() => navigation.navigate("Thursday")}
        />
        <Button
          title="Go to Friday."
          onPress={() => navigation.navigate("Friday")}
        />
        <Button
          title="Go to Saturday."
          onPress={() => navigation.navigate("Saturday")}
        />
        <Button
          title="Go to Sunday."
          onPress={() => navigation.navigate("Sunday")}
        />
      </SafeAreaView>
    </ImageBackground>
  );

  //   const renderItem = ({ item }) => (
  //     <ListItem
  //       condition={item.weather[0]?.main}
  //       dt_txt={item.dt_txt}
  //       max={item.main.temp_max}
  //       min={item.main.temp_min}
  //     />
  //   );
  //   const { container, image } = styles;
  //   return (
  //     <ImageBackground
  //       source={require("../../assets/thunderstorm-3625405_1920.jpg")}
  //       style={image}
  //     >
  //       <SafeAreaView style={container}>
  //         <FlatList
  //           data={weatherData}
  //           renderItem={renderItem}
  //           keyExtractor={(item) => item.dt_txt}
  //         />
  //       </SafeAreaView>
  //     </ImageBackground>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  // Allows our image to fill the entire background on the page.
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
