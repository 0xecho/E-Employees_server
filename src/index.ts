import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import asyncHandler from "express-async-handler"

import { EmployeeModel, IEmployee } from './models/schema'
import employeeService from './services/employeeService'
import mongoose, { ObjectId } from 'mongoose'

dotenv.config()

const app: Express = express()
const port: string = process.env.SERVER_PORT || "8000"

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Dube zare yelem, nege temelesu.")
})

app.get('/employees', asyncHandler(async (req: Request, res: Response) => {
    const employees = await employeeService.get_employees()
    res.send(employees)
}))

app.post('/employees', asyncHandler(async (req: Request, res: Response) => {    
    const employee: IEmployee = req.body
    const created_employee = await employeeService.create_employee(employee)
    res.send(created_employee)
}))

app.put('/employees/:id', asyncHandler(async (req: Request, res: Response) => {
    const id: string = req.params.id
    const employee: IEmployee = req.body
    const updated_employee = await employeeService.update_employee(id, employee)
    res.send(updated_employee)
}))

app.delete('/employees/:id', asyncHandler(async (req: Request, res: Response) => {
    const id: string = req.params.id
    const deleted_employee = await employeeService.delete_employee(id)
    res.send(deleted_employee)
}))

const MONGOOSE_URI: string = process.env.MONGOOSE_URI || "mongodb://localhost:27017/employees"
mongoose.connect(MONGOOSE_URI)


app.listen(port);