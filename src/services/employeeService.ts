import { Query } from "mongoose";
import { EmployeeModel, IEmployee } from "../models/schema";

export async function create_employee(employee: IEmployee): Promise<IEmployee> {
    return EmployeeModel.create(employee)
}

export function get_employees(): Query<IEmployee[], IEmployee> {
    return EmployeeModel.find()
}

export function update_employee(id: number, employee: IEmployee): ReturnType<typeof EmployeeModel.findOneAndUpdate> {
    return EmployeeModel.findByIdAndUpdate(id, employee)
}

export function delete_employee(id: number): ReturnType<typeof EmployeeModel.findOneAndDelete> {
    return EmployeeModel.findByIdAndDelete(id)
}

export default {
    create_employee,
    get_employees,
    update_employee,
    delete_employee
}