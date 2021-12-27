const Record = require('../models/Record');
const listRecords = require('../services/Record');

const record =  {
    "key": "ORqgjoiv",
    "createdAt": "2016-10-20T18:05:23.890Z",
    "totalCount": 2003,
};
const body = {
    "startDate": "2016-01-01",
    "endDate": "2017-01-01",
    "minCount": 2000,
    "maxCount": 2003
};

describe('Unit test', () => {

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it("Test record value", async() => {
        jest.spyOn(Record, 'aggregate').mockResolvedValue(record);
        
        const result = await listRecords.list(body);
        expect(result).toEqual(record);
    });
});