import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import asyncHandler from "express-async-handler"

dotenv.config()

const app: Express = express()
const port: string = process.env.SERVER_PORT || "8000"

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Dube zare yelem, nege temelesu.")
})

type Employee = {
    name: string,
    date_of_birth: string,
    salary: number,
    bender: string,
    id?: number
}

let employees: Employee[] = []

app.get('/employees', asyncHandler(async (req: Request, res: Response) => {
    res.send(employees)
}))

app.post('/employees', asyncHandler(async (req: Request, res: Response) => {    
    const employee: Employee = req.body
    employee.id = employees.length + 1
    employees.push(employee)
    res.send(employee)
}))

app.put('/employees/:id', asyncHandler(async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id)
    const employee: any = req.body
    employees = employees.map((e: Employee) => {
        return e.id === id ? employee : e
    })
    res.send(employee)
}))

app.delete('/employees/:id', asyncHandler(async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id)
    employees.splice(id, 1)
    res.send(employees)
}))


app.listen(port);