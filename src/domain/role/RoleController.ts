import { Request, Response, NextFunction } from "express";
import {
  OK_CODE,
} from "../../errorHandling/ResponseCodes";

import { insertRole } from "./RoleService";
import * as RoleRepository from './RoleRepository';

export const insertRoleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const insertedRole = await insertRole({ ...req.body });
    res.status(OK_CODE).json(insertedRole);
  } catch (e) {
    return next(e);
  }
};

export const getAllRoles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roles = await RoleRepository.getAllRoles();
    res.status(OK_CODE).json(roles);
  } catch(e) {
    return next(e);
  }
}