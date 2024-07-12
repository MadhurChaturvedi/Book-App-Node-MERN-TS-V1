import express from "express";
import globlaErrorHandler from "./middleware/GlobalErrorHandler";

const app = express();

// Http methods
app.get("/", (req, res) => {
  res.json({ messgae: "Wokring API!" });
});

// Global Error Handler
app.use(globlaErrorHandler);

export default app;
