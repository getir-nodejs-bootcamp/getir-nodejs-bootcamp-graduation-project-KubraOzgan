class ApiError extends Error {
    constructor(message, code, statusCode) { 
        super(message); //The sent message needs to be known by Error 
        this.message = message;
        this.statusCode = statusCode;
        this.code = code;
    }
}

module.exports = ApiError; 
