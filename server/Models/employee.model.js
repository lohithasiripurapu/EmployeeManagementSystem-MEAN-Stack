const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: { type: String },
    position: { type: String },
    location: { type: String },
    salary: { type: Number },
});

const Employee = mongoose.model('Employee', employeeSchema, 'Employee');

module.exports = Employee;