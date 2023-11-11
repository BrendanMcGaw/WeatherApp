import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList } from "react-native"
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
        <View>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
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
            <Text>Upcoming Weather</Text>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default UpcomingWeather;