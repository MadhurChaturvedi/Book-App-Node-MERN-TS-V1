import { config as conf } from "dotenv";

conf();
const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.DB_URL,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  cloudinaryCloud: process.env.CLOUDINARY_CLOUD,
  cloudinaryAPIkey: process.env.CLOUDINARY_API_KEY,
  cloudinarySecret: process.env.CLOUDINARY_API_SECRET,
};

export const config = Object.freeze(_config);
/* Object.freeze this 
   function means no 
   buddy can change 
   the env file it 
   only read!
*/
