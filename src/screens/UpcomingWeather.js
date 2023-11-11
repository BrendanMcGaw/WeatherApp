import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    FlatList, 
    StatusBar, 
    ImageBackground 
} from "react-native"
import ListItem from "../components/ListItem"

const DATA = [
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
            temp_max: 297.87,
            temp_min: 296.76
        },
        weather: [
            {
                main: "Rain"
            }
        ]
    },
    {
        dt_txt: "2022-08-30 18:00:00",
        main: {
            temp_max: 295.45,
            temp_min: 292.84
        },
        weather: [
            {
                main:  "Rain"
            }
        ]
    },
    {
        dt_txt: "2022-08-30 21:00:00",
        main: {
            temp_max: 294.93, 
            temp_min: 294.93
        },
        weather: [
            {
                main: "Clouds"
            }
        ]
    }
]

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem  
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            max={item.main.temp_max} 
            min={item.main.temp_min} 
        />
    )
    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            {/* Allows image to sit in the background behind all the other objects. */}
            <ImageBackground
                source={require("../../assets/thunderstorm-3625405_1920.jpg")} 
                style={image} 
            >
                <Text>Upcoming Weather</Text>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue"
    },
    // Allows our image to fill the entire background on the page.
    image: {
        flex: 1
    },
})
 
export default UpcomingWeather;