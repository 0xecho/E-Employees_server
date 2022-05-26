import validate from "validate.js";

validate.extend(validate.validators.datetime, {
    parse: function (val: string) {
        return new Date(val)
    },
    format: function (val: Date) {
        return val.toISOString().split('T')[0]
    }
})

export const EmployeeValidator = {
    name: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 20
        }
    },
    date_of_birth: {
        presence: true,
        date: true,
    },
    salary: {
        presence: true,
        numericality: {
            greaterThan: 0
        }
    },
    gender: {
        presence: true,
        inclusion: {
            within: [
                'male',
                'female',
            ]
        }
    }
}