import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  // valdation!
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fileds are required");
    return next(error);
  }
  res.json({ message: "User Created!" });
};

export { createUser };
