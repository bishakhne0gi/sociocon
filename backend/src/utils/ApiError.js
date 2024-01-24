class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [], // error stack        
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode
        this.data = null //read in node js
        this.message = message
        this.success = false
        this.errors = errors


        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStacktrace(this, this.constructor);
        }
    }
}

export default ApiError;