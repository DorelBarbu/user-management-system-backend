import { getAllPermissions } from "./PermissionRepository";
import { Request, Response, NextFunction } from 'express';
import { OK_CODE } from "../../errorHandling/ResponseCodes";
import InternalServerError from "../../errorHandling/InternalServerError";

export const getAllPermissionsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const permissions = await getAllPermissions();
    res.status(OK_CODE).json(permissions);
  } catch(e) {
    next(new InternalServerError());
  }
}