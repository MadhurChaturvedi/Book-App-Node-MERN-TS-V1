import { config } from "./config/config";
import app from "./src/app";
import connectDB from "./config/db";

const startServer = async () => {
  // connect database
  await connectDB();

  const port = config.port || 5000;
  app.listen(port, () => {
    console.log(`Listening on port: ${port}🎃`);
  });
};

startServer();
