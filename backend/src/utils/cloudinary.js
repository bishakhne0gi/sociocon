import { v2 as cloudinary } from "cloudinary";
import fs from "fs";




//fs--->temporary Storage
//temporary storage--> cloudinary
const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            // console.log(`Could not find path--->${localFilePath}`);
            return null;
        }
        //upload the file in cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log(`File has been uploaded successfully on cloudinary: ${response.url}`);
        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        //delete the localfile as the upload operation got failed



        console.log("Error in cloudinary-->", error);
        // console.log("Local file path--->", localFilePath);
        fs.unlinkSync(localFilePath);
        return;
    }
}

export default uploadCloudinary;




//configuration of cloudinary
