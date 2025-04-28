import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    weatherApiKey: process.env.OPENWEATHER_API_KEY
};

export function validateConfig() {
    if (!config.weatherApiKey) {
        throw new Error('OPENWEATHER_API_KEY environment variable is not set');
    }
}