import axios from "axios"
import { config } from "./config"

export const getWeatherData = async (lat: string, lon: string) => {
    return axios.get(
        "https://api.openweathermap.org/data/3.0/onecall",
        {
            params: {
                lat,
                lon,
                exclude: "minutely,hourly,daily",
                appid: config.weatherApiKey,
                units: "metric",
            },
        }
    )
}