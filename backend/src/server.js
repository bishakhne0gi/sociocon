// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import connectDB from './db/index.js';


dotenv.config(
    {
        path: './.env'
    }
)





connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at: ${process.env.PORT}`);
        })

        app.on("error", (err) => {
            console.log(`Error: `, err);
            throw err;
        })
    })
    .catch((err) => {
        console.log(`MongoDb connection failed!!`, err);
    });