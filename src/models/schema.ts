import mongoose, { Model, model, Schema } from 'mongoose'

export interface IEmployee {
    name: string;
    date_of_birth: Date;
    salary: number;
    gender: string;
}

enum GenderEnum {
    'Male' = 'male',
    'Female' = 'female'
}

interface IEmployeeMethods extends Model<IEmployee> {
    getNextId(): Promise<number>
}

const employeeSchema = new Schema<IEmployee, IEmployeeMethods>({
    name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: Object.values(GenderEnum),
        required: true
    }
})

export const EmployeeModel = model<IEmployee, IEmployeeMethods>('Employee', employeeSchema)