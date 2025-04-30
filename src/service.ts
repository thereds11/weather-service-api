import axios from "axios"
import { config } from "./config"

export const getWeatherData = async (lat: string, lon: string) => {
    try {
        return await axios.get(
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
        );
    } catch (error: any) {
        console.error('Error fetching weather data: ', error.message);
        return {
            status: error.response?.status || 500,
            statusText: error.response?.statusText || 'Weather API call failed',
            data: null
        }
    }
}