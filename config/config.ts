import { config as conf } from "dotenv";

conf();
const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.DB_URL
};

export const config = Object.freeze(_config);
/* Object.freeze this 
   function means no 
   buddy can change 
   the env file it 
   only read!
*/
