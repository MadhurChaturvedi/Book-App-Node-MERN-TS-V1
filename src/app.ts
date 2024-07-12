import express from "express";
import globlaErrorHandler from "./middleware/GlobalErrorHandler";

import userRouter from "./user/userRouter";

const app = express();

app.use(express.json());

// Http methods
app.get("/", (req, res) => {
  res.json({ messgae: "Wokring API!" });
});

app.use("/api/users", userRouter);

// Global Error Handler
app.use(globlaErrorHandler);

export default app;
