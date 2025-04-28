export interface IWeather {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: ICurrentWeather;
    alerts?: IAlert[];
}

export interface ICurrentWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: IWeatherDescription[];
}

export interface IWeatherDescription {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IAlert {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
}