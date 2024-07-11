import { config } from "./config/config";
import app from "./src/app";


const startServer = () => {
  const port = config.port || 5000;
  app.listen(port, () => {
    console.log(`Listening on port: ${port}🎃`);
  });
};

startServer();
// 48:00
