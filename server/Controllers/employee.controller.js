const express = require('express');
const Router = express.Router();

//local imports
const Employee = require('./../Models/employee.model');
const { generateCrudMethods } = require('./../Services/index');
const { validateDbId, raiseRecord404Error } = require('../Middlewares');
const employeeCrud = generateCrudMethods(Employee);

//retrieve all employees

Router.get('/', ( req, res, next) => {
    employeeCrud.getAll()
    .then(data => res.send(data))
    .catch(err => next(err));
});

//retrieve a single employee

Router.get('/:id', validateDbId, (req, res, next) => {
    //get the employee if it exists else return a 404 error

    employeeCrud.getById(req.params.id)
    .then(data => {
        if (data) res.send(data)
        else raiseRecord404Error(req, res)
    })
    .catch(err => next(err));

});

//add a new employee

Router.post('/', (req, res, next) => {

    const newEmployee = {
        fullName: req.body.fullName,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary

    }

    employeeCrud.create(newEmployee)
    .then(data => res.status(201).send(data))
    .catch(err => next(err));
});

//Update an existing employee

Router.put('/:id', validateDbId, (req, res, next) => {

    const newEmployee = {
        fullName: req.body.fullName,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary

    }


    employeeCrud.update(req.params.id, newEmployee)
    .then(data => {
        if (data) res.send(data)
        else raiseRecord404Error(req, res)
    })
    .catch(err => next(err));
});

//Delete an existing employee

Router.delete('/:id',validateDbId, (req, res, next) => {

    employeeCrud.delete(req.params.id)
    .then(data => {
        if (data) res.send(data)
        else raiseRecord404Error(req, res)
    })
    .catch(err => next(err));
});

module.exports = Router;