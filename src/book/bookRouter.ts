import express from "express";
import { createBook } from "./bookContoller";
import multer from "multer";
import path from "node:path";

const bookRouter = express.Router();

// file store local ->
const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: {
    fieldSize: 3e7, // 30mb * 1024 *1024
  },
});

bookRouter.post(
  "/",
  upload.fields([
    { name: "CoverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

export default bookRouter;
