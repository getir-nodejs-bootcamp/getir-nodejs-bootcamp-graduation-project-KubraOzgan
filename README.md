# Getir Node.js Bootcamp Graduation Project
## The Challenge
Creating a RESTful API using Express with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

## Request Payload
The request payload will include a JSON with 4 fields.
- “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You should filter the data using “createdAt”
- “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the documents should be between “minCount” and “maxCount”.

| Parameters | Description |
| ---------- | ----------- |
| startDate  | Date (YYYY-MM-DD) |
| endDate    | Date (YYYY-MM-DD) |
| minCount    | number |
| maxCount    | number |
### Sample Request Payload
```jsx
{
  "startDate": "2016-05-01",
  "endDate": "2017-01-07",
  "minCount": 2000,
  "maxCount": 2013
}
```
## Response Payload
Response payload should have 3 main fields.
- “code” is for status of the request. 0 means success. Other values may be used for errors that you define.
- “msg” is for description of the code. You can set it to “success” for successful requests. For unsuccessful requests, you should use explanatory messages.
- “records” will include all the filtered items according to the request. This array should include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts” array in the document.
### Sample Response Payload
```jsx
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ORqgjoiv",
            "createdAt": "2016-10-20T18:05:23.890Z",
            "totalCount": 2003
        },
        {
            "key": "cTehuTGd",
            "createdAt": "2016-09-08T14:00:36.779Z",
            "totalCount": 2007
        },
        {
            "key": "szeKOukV",
            "createdAt": "2016-06-22T22:36:22.528Z",
            "totalCount": 2011
        },
        {
            "key": "UZyCOljV",
            "createdAt": "2016-05-14T15:29:59.373Z",
            "totalCount": 2013
        }
    ]
}
```
## Return
| code | Status code | Message |
| ---- | ----------- | ------- |
| 0    |    200      | Success |
| 1    |    500      |   No record under specified conditions!      |
| -1   |    404      |   Not found the request you're looking for.      |
