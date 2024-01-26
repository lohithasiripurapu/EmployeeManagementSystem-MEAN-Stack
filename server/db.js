//database connections are automatically created when the application is started

const mongoose = require('mongoose');

const dburi = "mongodb://127.0.0.1/Employee-db";


module.exports = () => {
    return mongoose.connect(dburi);
}