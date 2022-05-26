import { Query } from "mongoose";
import { validate } from "validate.js";
import { EmployeeModel, IEmployee } from "../models/schema";
import { EmployeeValidator } from '../validator'

export async function create_employee(employee: IEmployee): Promise<IEmployee> {
    const validation = validate(employee, EmployeeValidator)
    if (validation) {
        throw new Error(JSON.stringify(validation))
    }
    return EmployeeModel.create(employee)
}

export function get_employees(): Query<IEmployee[], IEmployee> {
    return EmployeeModel.find()
}

export function update_employee(id: string, employee: IEmployee): ReturnType<typeof EmployeeModel.findOneAndUpdate> {
    const validation = validate(employee, EmployeeValidator)
    if (validation) {
        throw new Error(JSON.stringify(validation))
    }
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