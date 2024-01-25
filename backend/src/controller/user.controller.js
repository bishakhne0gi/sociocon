import asyncHandler from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (request, response) => {
    response.status(200).json(
        {
            message: "ok"
        }
    )
})



export default registerUser;
