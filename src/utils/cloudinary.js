import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFIlePath) => {
    try {
        if(!localFIlePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFIlePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("file has been uloaded successfully on cloudinary",
            response.url
        );
        return response
    } catch (error) {
        fs.unlinkSync(localFIlePath) // remove the locally saved temporary file as the upload operation goit failed
        return null;
    }
}


export {uploadOnCloudinary}









// cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
// {public_id: "shoes"},
// function(error, result) {console.log(result);})


//  // Upload an image
//  const uploadResult = await cloudinary.uploader
//  .upload(
//      'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//          public_id: 'shoes',
//      }
//  )
//  .catch((error) => {
//      console.log(error);
//  });

// console.log(uploadResult);