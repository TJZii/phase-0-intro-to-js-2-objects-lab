// Write your solution in this file!

const employee = {
    name: 'Amiya',
    streetAddress: 'Rhodes Island Command Center'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmploy = {...employee};
    newEmploy[key] = value;
    return newEmploy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmploy = {...employee};
    delete newEmploy[key];
    return newEmploy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}