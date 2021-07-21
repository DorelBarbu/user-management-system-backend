import { Request, Response, NextFunction } from "express";
import ApplicationError from "../errorHandling/ApplicationError";
import InternalServerError from "../errorHandling/InternalServerError";
import { DUPLICATE_KEY_CODE } from "../errorHandling/MongoErrorCodes";
import { RESOURCE_ALREADY_EXISTS_CODE } from "../errorHandling/ResponseCodes";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === "MongoError" && err.code === DUPLICATE_KEY_CODE) {
    return res
      .status(RESOURCE_ALREADY_EXISTS_CODE)
      .json(
        new ApplicationError(
          "Duplicate record in the database",
          RESOURCE_ALREADY_EXISTS_CODE,
          true
        )
      );
  }
  if (err.isOperational) {
    return res.status(err.status).json(err);
  } else {
    return res.status(500).json(new InternalServerError());
  }
};

export default errorHandler;
