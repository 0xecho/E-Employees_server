import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose, { ObjectId } from 'mongoose'

import { 
    create_employee,
    get_employees,
    update_employee,
    delete_employee 
} from './controllers/index'

dotenv.config()

const app: Express = express()
const port: string = process.env.SERVER_PORT || "8000"

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Dube zare yelem, nege temelesu.")
})

app.get('/employees', get_employees)
app.post('/employees', create_employee)
app.put('/employees/:id', update_employee)
app.delete('/employees/:id', delete_employee)

const MONGO_CONNECTION_STRING: string = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/employees"
mongoose.connect(MONGO_CONNECTION_STRING)

app.listen(port);