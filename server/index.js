const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//local imports
const connectDb = require('./db.js');
const employeeRoutes = require('./Controllers/employee.controller.js');
const { errorHandler } = require('./Middlewares/index.js');


const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api/employee', employeeRoutes);
app.use(errorHandler);



connectDb()
.then(() => {
    console.log('connected to database');
    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });
}).catch(err => console.log(err));