import React, { useContext } from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingStack from './UpcomingStack'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import UpcomingWeather from '../screens/UpcomingWeather'
import { WeatherContext } from './WeatherDataContext'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    const { loading, error, weather } = useContext(WeatherContext)
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#818589'
                },
                headerShown: false
            }}
        >
            <Tab.Screen
                name={'Current'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'droplet'}
                            size={25}
                            color={focused ? 'tomato' : 'white'}
                        />
                    )
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name={'Upcoming'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={25}
                            color={focused ? 'tomato' : 'white'}
                        />
                    )
                }}
            >
                {() => <UpcomingStack weatherData={weather.list} />}
            </Tab.Screen>
            <Tab.Screen
                name={'City'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={25}
                            color={focused ? 'tomato' : 'white'}
                        />
                    )
                }}
            >
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs
