import { config } from "./src/config/config";
import app from "./src/app";
import connectDB from "./src/config/db";

const startServer = async () => {
  // connect database
  await connectDB();

  const port = config.port || 5000;
  app.listen(port, () => {
    console.log(`Listening on port: ${port}🎃`);
  });
};

startServer();
