import { NextFunction, Request, Response } from "express";
import { getWeatherData } from "./service";
import { isValidLatitude, isValidLongitude } from "./utils/validator";
import { IWeather } from "./types";
import { getTemperatureCategory } from "./utils/temperature";

export const getWeatherDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { lat, lon } = req.query;
        // Validation for input
        if (!lat || !lon) {
            res.status(400).send("Latitude and Longitude are required");
            return;
        }

        if (typeof lat !== 'string' || typeof lon !== 'string') {
            res.status(400).json({ error: "Parameters lat and lon must be strings" });
            return;
        }

        if (!isValidLatitude(lat) || !isValidLongitude(lon)) {
            res.status(400).json({ error: "Invalid latitude or longitude" });
            return;
        }

        const response = await getWeatherData(lat, lon);
        if (response.status !== 200) {
            res.status(response.status).json({ error: response.statusText });
            return;
        }
        const data = response.data as IWeather;
        const currentWeather = data.current;
        const weatherCondition = currentWeather.weather[0].main;
        const temperature = currentWeather.temp;
        const alerts = data.alerts;
        const temperatureCategory = getTemperatureCategory(temperature);
        
        res.json({
            weatherCondition,
            temperature,
            temperatureCategory,
            alerts
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
}