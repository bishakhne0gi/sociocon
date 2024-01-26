import asyncHandler from "../utils/asyncHandler.js";
import ApiError from '../utils/ApiError.js'
import { User } from "../model/user.model.js";
import uploadCloudinary from '../utils/cloudinary.js';
import ApiResponse from "../utils/ApiResponse.js";



const registerUser = asyncHandler(async (request, response) => {
    //Steps for registering user
    /*
    1. Get user details from frontend 
    2. Validation of the username and email
    3. Check user already exists: username,email
    4. Check for images ---> check for avatar
    5. Upload to cloudinary, avatar
    6. Create user object ---> create entry in db
    7. Remove password and refresh token field from response
    8. Check for user creation
    9. Return response
    */

    try {

        const { username, email, fullname, password } = request.body

        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            [username, email, fullname, password].some(
                (field) => {
                    return field?.trim() === ""
                }
            )
        ) {
            throw new ApiError(
                400,
                "All fields are compulsory and required!!"
            )
        }

        //email validation
        if (!emailValidation.test(email)) {
            throw new ApiError(
                400,
                "Email should be validated"
            )
        }


        //     console.log(`
        // Username--->${username},
        // Email--->${email},
        // Password-->${password},

        // `);

        //check whether the user is already registered or not
        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (existedUser) {
            throw new ApiError(
                409,
                "User with email/username already exist"
            )
        }

        // console.log(`Request File: ${JSON.stringify(request.files)}`);
        const fileJson = request.files;
        const avatarLocalPath = fileJson?.avatar[0]?.path;
        // console.log("Avatar Local Path", avatarLocalPath);

        let coverImageLocalPath;
        if (request.files && Array.isArray(request.files.coverImage) && request.files.coverImage.length > 0) {
            coverImageLocalPath = request.files.coverImage[0].path
        }

        if (!avatarLocalPath) {
            throw new ApiError(
                400,
                "Avatar File is missing"
            )
        }


        //upload in the cloudinary
        const avatar = await uploadCloudinary(avatarLocalPath);
        const coverImage = await uploadCloudinary(coverImageLocalPath);

        // console.log(`Avatar url--->${avatar}`);

        if (!avatar) {
            throw new ApiError(
                400,
                "Avatar File is not provided"
            )
        }


        //creation of user object
        const user = await User.create(
            {
                username: username.toLowerCase(),
                email,
                fullname,
                password,
                avatar: avatar.url,
                coverImage: coverImage?.url || ""

            }
        )

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        );

        if (!createdUser) {
            throw new ApiError(
                500,
                "Registration of user not done"
            )
        }


        //returning of response
        return response.status(201).json(
            new ApiResponse(
                200,
                createdUser,
                "User registered Successfully"
            )
        )


    } catch (error) {
        console.error("Error:", error);
        return response.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }


    //destructure from the request body


    //file handling in multer.js



    //validation
    /*
    if (fullname === "") {
        throw ApiError(
            400,
            "fullname is required"
        )
    }
    */


    //Optional Chaining if the object is not undefined/null then perform the operations

})



export default registerUser;
