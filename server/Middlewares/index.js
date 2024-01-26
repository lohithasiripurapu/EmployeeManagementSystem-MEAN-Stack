const isValidObjectId = require("../helper");


const validateDbId = (req, res, next) => {
        if (isValidObjectId(req.params.id) === false) {
            return res.status(404).send({ Error: 'id is not valid' });
        }
        else {
            next();
        }
};

const raiseRecord404Error = (req, res) => {
    res.status(404).send({ Error: 'no record with given _id' + req.params.id });
};

const errorHandler = (err, req, res, next) => {
    res.status(500).send({ Error: err.message });
};

module.exports = {
    validateDbId,
    raiseRecord404Error,
    errorHandler,
};