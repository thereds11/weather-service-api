import express, { NextFunction, Request, Response } from 'express';
import apiRouter from './route';
import { config, validateConfig } from './config';

validateConfig();

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});