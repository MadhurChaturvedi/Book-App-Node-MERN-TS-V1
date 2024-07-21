import express from "express";
import { createBook } from "./bookContoller";
import multer from "multer";
import path from "node:path";

const bookRouter = express.Router();

// file store local ->
const maxSize = 10 * 1024 * 1024; // 10MB
const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: {
    // const maxSize = 10 * 1024 * 1024; // 10MB
    fieldSize: maxSize, // 30mb * 1024 *1024
  },
});

bookRouter.post(
  "/createBoook",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

export default bookRouter;
