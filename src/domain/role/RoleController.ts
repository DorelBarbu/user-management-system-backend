import { Request, Response, NextFunction } from "express";
import ApplicationError from "../../errorHandling/ApplicationError";
import { DUPLICATE_KEY_CODE } from "../../errorHandling/MongoErrorCodes";
import {
  OK_CODE,
  RESOURCE_ALREADY_EXISTS_CODE,
} from "../../errorHandling/ResponseCodes";
import { insertRole } from "./RoleRepository";

export const insertRoleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const insertedRole = await insertRole({ ...req.body });
    res.status(OK_CODE).json(insertedRole);
  } catch (e) {
    if (e.name === "MongoError" && e.code === DUPLICATE_KEY_CODE) {
      return next(
        new ApplicationError(
          "Duplicate record in the database",
          RESOURCE_ALREADY_EXISTS_CODE,
          true
        )
      );
    }
    return next(e);
  }
};
