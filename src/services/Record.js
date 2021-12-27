const Record = require("../models/Record");

/* 
* @params body, which includes startDate, endDate, minCount and MaxCount
* @return filtered records with aggregate: key, createdAt and sum of counts as totalCount
*
*/

const list = (body) => {
     return Record.aggregate([
        { 
            $project: {
                _id: false, 
                createdAt: true, 
                key: true,
                totalCount: {$sum: "$counts"}
            } 
        },
        {
            $match: {
                createdAt: {
                    $gte: new Date(body.startDate), 
                    $lte: new Date(body.endDate)
                },  
                totalCount: {
                    $gte: body.minCount,
                    $lte: body.maxCount
                } 
            }
        }
    ]) 
};

module.exports = {
    list,
} 
