import { Request, Response, NextFunction } from "express";
import { OK_CODE } from "../../errorHandling/ResponseCodes";
import { insertRole } from "./RoleRepository";

export const insertRoleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const insertedRole = await insertRole({...req.body});
    res.status(OK_CODE).json(insertedRole);
  } catch (e) {
    console.log(e);
    return next(e);
  }
};