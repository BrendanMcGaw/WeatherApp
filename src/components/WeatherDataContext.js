import React, { createContext } from 'react'
import { useGetWeather } from '../hooks/useGetWeather'

export const WeatherContext = createContext()

console.log(JSON.stringify(weather.city, null, 6) + 'More words')

export const WeatherProvider = ({ children }) => {
    const [loading, error, weather] = useGetWeather()
    return (
        <WeatherContext.Provider value={{ loading, error, weather }}>
            {children}
        </WeatherContext.Provider>
    )
}
