import { Request, Response } from "express";

export const getWeatherDetails = (req: Request, res: Response) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            res.status(400).send("Latitude and Longitude are required");
            return;
        }

        res.send({
            lat,
            lon
        });

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
        return;
    }
}