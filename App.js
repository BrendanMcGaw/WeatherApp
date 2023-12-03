import React, { useContext, createContext, useCallback, useState } from 'react'
import {
    RefreshControl,
    ScrollView,
    ActivityIndicator,
    View,
    SafeAreaView,
    Text,
    StyleSheet
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

export const WeatherContext = createContext()

const App = () => {
    const [loading, error, weather] = useGetWeather()
    const [refreshing, setRefreshing] = useState(false)
    console.log(JSON.stringify(weather.city, null, 6) + 'More words')

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    if (weather && weather.list && !loading) {
        return (
            <SafeAreaView style={styles.viewContainer}>
                <NavigationContainer>
                    <Tabs weather={weather} />
                    {/* Had to place the ScrollView inside the navigation container, and set the position to absolute
                    and with a backgroundColor of transparent to enable the scroll without taking up any container space. */}
                    {/* Refresh currently working, can't access tabs though, maybe seperate solution somewhere? */}
                    <ScrollView
                        style={styles.scroll}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    ></ScrollView>
                </NavigationContainer>
            </SafeAreaView>
        )
    }
    return (
        <View style={styles.loadingContainer}>
            {error ? (
                <ErrorItem />
            ) : (
                <ActivityIndicator size={'large'} color={'blue'} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    scroll: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent'
    },
    viewContainer: {
        flex: 1
    }
})

export default App
