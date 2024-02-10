
/*
const asyncHandler = (func) => {
    () => {

    }
}
*/

// try-catch approach
// const asyncHandler = (func) => async (request, response, next) => {
//     try {

//         return await func(request, response, next);
//     }
//     catch (error) {
//         return response.status(error.code || 500).json(
//             {
//                 success: false,
//                 message: error.message
//             }
//         )
//     }
// }


// Promise Approach
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export default asyncHandler;