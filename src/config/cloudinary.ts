import { v2 as cloudinary } from "cloudinary";
import { config } from "./config";

// Configuration
cloudinary.config({
  cloud_name: config.cloudinaryCloud,
  api_key: config.cloudinaryAPIkey,
  api_secret: config.cloudinarySecret,
});

export default cloudinary;
