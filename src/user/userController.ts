import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  // valdation!
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fileds are required");
    return next(error);
  }

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      const error = createHttpError(400, "User already exist wiht this email.");
      return next(error);
    }
  } catch (e) {
    return next(createHttpError(500, "Error while getting user"));
  }

  // Password Hashing Logic
  const hashedPassword = await bcrypt.hash(password, 10);
  // store the user in db using create menthod in moggoose!

  let newUser: User;
  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    return next(createHttpError(500, "Error while while creating user"));
  }
  let token;
  try {
    //  token generation JWT
    token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
  } catch (err) {
    return next(createHttpError(500, "Error while signing the jwt token"));
  }

  // response
  res.json({ accessToken: token });
};

export { createUser };

// 2:17:59 jwt token
