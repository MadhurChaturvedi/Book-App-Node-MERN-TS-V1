import { NextFunction, Response, Request } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

// Global Error Handler
const globlaErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message,
    errorStack: config.env === "development" ? err.stack : "",
  });
};

export default globlaErrorHandler;
