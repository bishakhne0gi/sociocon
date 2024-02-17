import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';


// ROUTES

//routes import
import userRouter from "./route/user.route.js";


//creation of instance of express
const app = express();

//app.use--> middleware

//options of cors
app.use(cors(
    {
        origin: process.env.CLIENT_ORIGIN,
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

app.use(morgan('tiny'))

//accepting public assessts like--->files,folders of pdf,images
app.use(express.static("public"));

//accessing cookies and set cookies in the browser of the user
app.use(cookieParser());


//routes declaration
app.use("/api/v1/users", userRouter);


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost/5173/');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');

//     if (req.method === 'OPTIONS') {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// });

//URL WILL BE:
// https://localhost:8000/api/v1/users/register


export default app;