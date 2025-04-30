import { isValidLatitude, isValidLongitude } from '../../src/utils/validator';

describe('Latitude Validator', () => {
    it('accept valid latitudes', () => {
        expect(isValidLatitude('45')).toBe(true);
        expect(isValidLatitude('-90')).toBe(true);
    });
    it('reject invalid latitudes', () => {
        expect(isValidLatitude('100')).toBe(false);
        expect(isValidLatitude('abc')).toBe(false);
    });
});

describe('Longitude Validator', () => {
    it('accept valid longitudes', () => {
        expect(isValidLongitude('120')).toBe(true);
        expect(isValidLongitude('-180')).toBe(true);
    });
    it('reject invalid longitudes', () => {
        expect(isValidLongitude('200')).toBe(false);
        expect(isValidLongitude('xyz')).toBe(false);
    });
});