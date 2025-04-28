export const getTemperatureCategory = (temperature: number) => {
    if (temperature < 0) {
        return 'Freezing';
    } else if (temperature < 10) {
        return 'Cold';
    } else if (temperature < 20) {
        return 'Cool';
    } else if (temperature < 30) {
        return 'Warm';
    } else return 'Hot';
}