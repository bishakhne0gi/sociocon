import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';


import userRouter from "./route/user.route.js";


//creation of instance of express
const app = express();

//app.use--> middleware
app.use(morgan('tiny'))

app.use(cookieParser())

app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true
}))

//accepting json and limiting power
app.use(express.json({ limit: "16kb" }))

//accepting from url
app.use(express.urlencoded({
    extended: true,
    limit: "15kb"
}))


//accepting public assessts like--->files,folders of pdf,images
app.use(express.static("public"))


// ROUTES
app.use("/api/v1/users", userRouter)


export default app;