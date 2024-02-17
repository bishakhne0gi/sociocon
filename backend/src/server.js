// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import connectDB from './db/index.js';
import app from "./app.js";
import { v2 as cloudinary } from "cloudinary"

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

connectDB()
    .then(() => {




        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(`MongoDb connection failed!!`, err);
    });