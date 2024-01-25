import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


//fs--->temporary Storage
//temporary storage--> cloudinary
const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }
        //upload the file in cloudinary
        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log(`File has been uploaded successfully on cloudinary: ${response.url}`);

        return response;
    } catch (error) {
        //delete the localfile as the upload operation got failed
        fs.unlink(localFilePath);
        return null;
    }
}

export default uploadCloudinary;




//configuration of cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});