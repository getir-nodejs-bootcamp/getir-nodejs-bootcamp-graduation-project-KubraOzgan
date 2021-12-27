const httpStatus = require("http-status");
const Record = require("../services/Record");
const ApiError = require("../errors/ApiError");

const listRecords = (req, res, next) => {   
    Record.list(req.body)
        .then((recordsList) => {
            if(!recordsList.length) return next(new ApiError("No record under specified conditions!", 1));
            res.status(httpStatus.OK).send({ code: 0, msg: "Success", records: recordsList}); 
        })
      .catch((e) => next(new ApiError(e?.message)));
       
}; 
module.exports = {
    listRecords, 
}
