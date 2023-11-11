import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'

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

const Item = (props) => {
    const { dt_txt, min, max, condition } = props
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text style={styles.dt}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <Item  
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            max={item.main.temp_max} 
            min={item.main.temp_min} 
        />
    )
    return (
        <SafeAreaView style={styles.container}>
            {/* Allows image to sit in the background behind all the other objects. */}
            <ImageBackground
                source={require("../../assets/thunderstorm-3625405_1920.jpg")} 
                style={styles.image} 
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
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "pink",
    },
    temp: {
        color: "white",
        fontSize: 20
    },
    dt: {
        color: "white",
        fontSize: 15
    },
    // Allows our image to fill the entire background on the page.
    image: {
        flex: 1
    },
})
 
export default UpcomingWeather;