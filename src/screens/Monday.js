import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import moment from 'moment'

const Monday = ({ weatherData }) => {
    console.log(weatherData[0].dt_txt)
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0]?.main}
            dt_txt={item.dt_txt}
            max={item.main.temp_max}
            min={item.main.temp_min}
        />
    )

    const { container } = styles
    // if (moment(weatherData.dt_txt).format("dddd") == "Monday") {
    // weatherData[0].dt_txt;
    // const day1 = dayName.getDay();
    // iterates through by using moment to find the day of the week and only displaying particular day products.
    for (let i = 0; i < weatherData.length; i++) {
        let dayName = moment(weatherData[i].dt_txt).format('dddd')
        console.log(dayName)
        console.log(i)
        if (dayName === 'Monday') {
            return (
                <SafeAreaView style={container}>
                    <FlatList
                        data={weatherData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.dt_txt}
                    />
                </SafeAreaView>
            )
        }
    }
    // length of weatherData = 40. Iterate through i++ until == 40 and check each day to find all days that are the same and then render only those days datas.
    console.log(weatherData.length)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    image: {
        flex: 1
    }
})

export default Monday
