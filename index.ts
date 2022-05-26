import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express()
const port: string = process.env.SERVER_PORT || "8000"

app.get('/', (req: Request, res: Response) => {
    res.send("Dube zare yelem, nege temelesu.")
})


app.listen(port);