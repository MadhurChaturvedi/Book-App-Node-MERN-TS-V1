import { NextFunction, Request, Response } from "express";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
    const {} = req.body
  res.status(200).json({ message: "Hello" });
};

export { createBook };
