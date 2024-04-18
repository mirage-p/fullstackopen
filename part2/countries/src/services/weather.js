import axios from 'axios'

const api_key = import.meta.env.VITE_SOME_KEY

const getAll = (lat, lon) => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {getAll}