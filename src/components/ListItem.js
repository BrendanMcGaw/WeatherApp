// TODO::: Create stack navigator, to click on for each "day of the week" to see precisely what Saturdays weather will hold and sunday, etc...

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { WeatherType } from '../Utilities/WeatherType'
import moment from 'moment'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp, dateTextWrapper } = styles
    return (
        <View style={item}>
            <Feather
                name={WeatherType[condition].icon}
                size={50}
                color={'white'}
            />
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°${Math.round(max)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2.5,
        backgroundColor: '#818589'
    },
    temp: {
        color: 'white',
        fontSize: 15
    },
    date: {
        color: 'white',
        fontSize: 16
    },
    dateTextWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export default ListItem
