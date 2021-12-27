const Joi = require("joi");

/*
* @params check startDate, endDate, minCount and maxCount according to their type and being required
*/

const validateReq = Joi.object({
    startDate: Joi.date().required(), 
    endDate: Joi.date().required(),
    minCount: Joi.number().min(0).required(),
    maxCount: Joi.number().min(0).required(),
});

module.exports = {
    validateReq,
}