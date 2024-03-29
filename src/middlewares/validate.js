const httpStatus = require("http-status");

const validate = (schema, source) => (req, res, next) => {
    const { value, error } = schema.validate(req[source]);
    if(error) {
        const errMessage = error?.details?.map((detail) => detail?.message).join(", ");
        return res.status(httpStatus.BAD_REQUEST).send({ error: errMessage });
    }
    Object.assign(req, value);
    return next();
};

module.exports = validate; 
