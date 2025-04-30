import { getTemperatureCategory } from '../../src/utils/temperature';

describe('getTemperatureCategory', () => {
    it('should return Freezing for < 0°C', () => {
        expect(getTemperatureCategory(-5)).toBe('Freezing');
    });
    it('should return Cold for < 10°C', () => {
        expect(getTemperatureCategory(5)).toBe('Cold');
    });
    it('should return Cool for < 20°C', () => {
        expect(getTemperatureCategory(15)).toBe('Cool');
    });
    it('should return Warm for < 30°C', () => {
        expect(getTemperatureCategory(25)).toBe('Warm');
    });
    it('should return Hot for < 40°C', () => {
        expect(getTemperatureCategory(35)).toBe('Hot');
    });
});