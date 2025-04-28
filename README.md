# Weather API Service

A simple REST API service that provides weather information based on geographical coordinates using the [OpenWeather API](https://openweathermap.org/api/one-call-3).

## Feature

- Get current weather conditions by latitude and longtitude
- Temperature categorization (Freezing, Cold, Cool, Warm, Hot)
- Weather alerts information

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeather API key

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thereds11/weather-service-api.git
cd weather-service-api
```

2. Install dependencies:

```bash
npm install
# or 
yarn install
```

3. Create a `.env` file in the root directory from .env.example and add your OpenWeather API key:

```bash
OPENWEATHER_API_KEY=your_openweather_api_key
PORT=3000
```

## Usage

1. Start the server:

```bash
# Development

npm run dev
# or
yarn dev

# Production

npm run build
npm start
# or
yarn build
yarn start
```

## API Endpoints

### GET /api/weather

Get weather information for a given location

**Query Parameters:**

- `lat` (required): Latitude of the location
- `lon` (required): Longitude of the location

**Response:**

```json
{
    "weatherCondition": "Clouds",
    "temperature": 25.3,
    "temperatureCategory": "Warm",
    "alerts": [
        {
            "sender_name": "Weather Alert",
            "event": "Heatwave",
            "start": 1686662400,
            "end": 1686748800,
            "description": "High temperatures expected"
        }
    ]
}
