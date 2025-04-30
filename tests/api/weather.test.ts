import request from 'supertest';
import express from 'express';
import apiRouter from '../../src/route';
import { config, validateConfig } from '../../src/config';
import axios from 'axios';
import { mocked } from 'jest-mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const app = express();
app.use(express.json());
app.use('/api', apiRouter);

const mockResponse = {
    status: 200,
    data: {
        current: {
            temp: 22,
            weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
        },
        alerts: [
            {
                sender_name: "NWS",
                event: "Heat Advisory",
                start: 1682932800,
                end: 1682958000,
                description: "Expect hot conditions today.",
            },
        ],
    }
};

describe('GET /api/weather', () => {
    beforeAll(() => {
        mockedAxios.get.mockResolvedValue(mockResponse);
    });

    it('should return weather data with valid lat/lon', async () => {
        const res = await request(app).get('/api/weather?lat=34.05&lon=-118.25');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('weatherCondition', 'Clear');
    });
})