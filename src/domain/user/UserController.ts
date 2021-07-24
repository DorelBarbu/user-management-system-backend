import { Request, Response, NextFunction } from "express";
import { OK_CODE } from "../../errorHandling/ResponseCodes";
import * as UserRepository from './UserRepository';

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await UserRepository.getAllUsers();
  res.status(OK_CODE).json(users);
};
