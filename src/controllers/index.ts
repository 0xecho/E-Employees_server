import { Request, Response } from 'express'
import asyncHandler from "express-async-handler"
import { IEmployee } from '../models/schema'
import employeeService from '../services/employeeService'

export const get_employees =  asyncHandler(async (req: Request, res: Response) => {
    const page: any = parseInt(req.query.page) || 1
    const limit: any = parseInt(req.query.limit) || 10
    const employees = await employeeService.get_employees(page, limit)
    const totalPages =
    res.send({
        employees,
        page,
        limit
    })
})

export const create_employee = asyncHandler(async (req: Request, res: Response) => {
    const employee: IEmployee = req.body
    const created_employee = await employeeService.create_employee(employee)
    res.send(created_employee)
})

export const update_employee = asyncHandler(async (req: Request, res: Response) => {
    const id: string = req.params.id
    const employee: IEmployee = req.body
    const updated_employee = await employeeService.update_employee(id, employee)
    res.send(updated_employee)
})

export const delete_employee = asyncHandler(async (req: Request, res: Response) => {
    const id: string = req.params.id
    const deleted_employee = await employeeService.delete_employee(id)
    res.send(deleted_employee)
})