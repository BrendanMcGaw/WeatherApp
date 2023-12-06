import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            )
            const data = await res.json()
            setWeather(data)
            setLoading(false)
        } catch (error) {
            setError('Could not fetch weather.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // While waiting for permission (Async allows task to pause and do other tasks) it will continue to load geolocation.
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('permission to access location was denied')
                return
            }
            console.log('Getting position prep')
            // Changed getCurrentPositionAsync because the accuracy level set to default of getCurrentPositionAsync defaults to level 3
            // which is the equivalant of 100 metres.
            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.LocationAccuracy.Low
            })
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)
        })() // immediate invoking on function we put () afterwards.
    }, []) // Array is for the dependencies. This allows the useEffect to only run once when the component is first run.

    useEffect(() => {
        if (!lat || !lon) {
            return
        }
        fetchWeatherData()
    }, [lat, lon])

    return [loading, error, weather]
}
