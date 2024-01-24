
/*
const asyncHandler = (func) => {
    () => {

    }
}
*/

// try-catch approach
const asyncHandler = (func) => async (request, response, next) => {
    try {

        await func(request, response, next);
    }
    catch (error) {
        response.status(error.code || 500).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}


/* Promise Approach
const asyncHandler = (requestHandler) => {
    () => {
        Promise.resolve().catch((error) => next(error))
    }
}
*/



// const asyncHandler = (fn) => {

// }

export default asyncHandler;