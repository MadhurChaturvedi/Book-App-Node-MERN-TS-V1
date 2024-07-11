import express from "express";

const app = express();

// Http methods
app.get("/", (req, res, next) => {
  res.json({ messgae: "Wokring API!" });
});

export default app;
