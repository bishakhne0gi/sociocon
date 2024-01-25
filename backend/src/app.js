import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


// ROUTES

//routes import
import userRouter from "./route/user.route.js";


//creation of instance of express
const app = express();

//app.use--> middleware

//options of cors
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));

//accepting json and limiting power
app.use(express.json({
    limit: "16kb"
}))

//accepting from url
app.use(express.urlencoded(
    {
        extended: true,
        limit: "15kb"
    }
))

//accepting public assessts like--->files,folders of pdf,images
app.use(express.static("public"));

//accessing cookies and set cookies in the browser of the user
app.use(cookieParser());


//routes declaration
app.use("/api/v1/users", userRouter);



//URL WILL BE:
// https://localhost:8000/api/v1/users/register


export default app;