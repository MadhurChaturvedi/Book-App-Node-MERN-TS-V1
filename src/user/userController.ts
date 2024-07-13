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
  res.status(201).json({ accessToken: token });
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }
  let user;
  try {
    user = await userModel.findOne({ email });
    if (!user) {
      return next(createHttpError(404, "User not Found!"));
    }
  } catch (err) {
    return next(createHttpError(404, "Error while while user login"));
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(createHttpError(401, "username or password incorrect!"));
  }

  let token;
  try {
    // create accesstoken
    token = sign({ sub: user._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
  } catch (err) {
    return next(createHttpError(404, "Error while signing the jwt token"));
  }
  res.status(201).json({ accessToken: token });
};

export { createUser, loginUser };

// 2:17:59 jwt token
