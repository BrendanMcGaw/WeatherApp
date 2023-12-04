import React, { useContext } from 'react'
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
import ErrorItem from './src/components/ErrorItem'
import {
    WeatherContext,
    WeatherProvider
} from './src/components/WeatherDataContext'

const App = () => {
    const { loading, error, weather } = useContext(WeatherContext)
    console.log(weather)
    // const [refreshing, setRefreshing] = useState(false)
    // const onRefresh = useCallback(() => {
    //     setRefreshing(true)
    //     setTimeout(() => {
    //         setRefreshing(false)
    //     }, 2000)
    // }, [])

    if (weather && weather.list && !loading) {
        return (
            <WeatherProvider>
                <SafeAreaView style={styles.viewContainer}>
                    <NavigationContainer>
                        <Tabs />
                        {/* Had to place the ScrollView inside the navigation container, and set the position to absolute
                    and with a backgroundColor of transparent to enable the scroll without taking up any container space. */}
                        {/* Refresh currently working, can't access tabs though, maybe seperate solution somewhere? */}
                    </NavigationContainer>
                </SafeAreaView>
            </WeatherProvider>
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
    viewContainer: {
        flex: 1
    }
})

export default App
