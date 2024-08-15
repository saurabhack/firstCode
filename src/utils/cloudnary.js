import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const uploadOnCloudinary=async (localFilePath)=>{
        try{
            if(!localFilePath) return null
            const response= await cloudinary.uploader.upload(localFilePath,{
                resource_type:'auto'
            })
            console.log("file is uploaded on cloudinary",response.url)
            return response;
        }catch(error){
            fs.unlinkSync(localFilePath) //localy saved temparary file as the uploaded operation
            return null;
        }
    }
    
    cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikimedia/a/ae/Olympic_flag.jpg",
    {public_id:"olympic_flag"},
    function(error,result){console.log(result);});