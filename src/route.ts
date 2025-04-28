import { Router } from 'express';
import { getWeatherDetails } from './controller';

const apiRouter = Router();

apiRouter.get('/weather', getWeatherDetails);

export default apiRouter;