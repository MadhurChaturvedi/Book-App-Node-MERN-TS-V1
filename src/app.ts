import express from "express";
import globlaErrorHandler from "./middleware/GlobalErrorHandler";

import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";

const app = express();

app.use(express.json());

// Http methods
app.get("/", (req, res) => {
  res.json({ messgae: "Wokring API!" });
});

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

// Global Error Handler
app.use(globlaErrorHandler);

export default app;
