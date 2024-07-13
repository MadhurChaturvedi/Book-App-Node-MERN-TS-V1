import express from "express";
import { createBook } from "./bookContoller";


const bookRouter = express.Router();

bookRouter.post("/", createBook);

export default bookRouter;
