import { useEffect, useState } from 'react'
import weatherData from '../services/weather'

const Weather = ({ country, lat, lon }) => {
    const [weather, setWeather] = useState([])
    useEffect(() => {
        weatherData
        .getAll(lat, lon)
        .then(data => {
            setWeather(data)
        })
    }, [country])

    return (
        <>
            <h1>Weather in {country}</h1>
            <p> {weather.main ? `temperature' ${weather.main.temp}` : "Loading"} ºC</p>
        </>
    )
}

export default Weather