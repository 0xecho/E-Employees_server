import { Query } from "mongoose";
import { EmployeeModel, IEmployee, PaginatedEmployees } from "../models/schema";

export async function create_employee(employee: IEmployee): Promise<IEmployee> {
    return EmployeeModel.create(employee)
}

export async function get_employees(page: number, limit: number): Promise<PaginatedEmployees> {
    const employees = await EmployeeModel.find().skip((page - 1) * limit).limit(limit)
    return {
        employees,
        totalPages: Math.ceil(await EmployeeModel.countDocuments() / limit),
    }    
    
}

export function update_employee(id: string, employee: IEmployee): ReturnType<typeof EmployeeModel.findOneAndUpdate> {
    return EmployeeModel.findByIdAndUpdate(id, employee)
}

export function delete_employee(id: string): ReturnType<typeof EmployeeModel.findOneAndDelete> {
    return EmployeeModel.findByIdAndDelete(id)
}

export default {
    create_employee,
    get_employees,
    update_employee,
    delete_employee
}