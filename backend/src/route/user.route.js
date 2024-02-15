import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controller/user.controller.js";
import { upload } from '../middleware/multer.middleware.js';
import asyncHandler from "../utils/asyncHandler.js";
import verifyJwt from '../middleware/auth.middleware.js'


const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    asyncHandler(registerUser)
)


router.route("/login").post(
    loginUser
)


//secured routes
router.route("/logout").post(
    verifyJwt,
    logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

export default router;