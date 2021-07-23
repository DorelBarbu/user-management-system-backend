import { Response, Request, NextFunction } from "express";
import { jwtConfig } from "../../config/jwt.config";
import { OK_CODE } from "../../errorHandling/ResponseCodes";
import UnauthorizedError from "../../errorHandling/UnauthorizedError";
import { getToken } from "../../middleware/RequireAuth";
import { hashPassword } from "../../utils/hashPassword";
import { verify } from "../JwtService";
import { registerUser, loginUser } from "./AuthService";

const registerUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const registerUserResponse = await registerUser({
      ...req.body,
      password: hashPassword(req.body.password),
    });

    registerUserResponse.password = "";

    res.status(OK_CODE).json(registerUserResponse);
  } catch (e) {
    return next(e);
  }
};

const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const loginResult = await loginUser({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(OK_CODE).json(loginResult);
  } catch (e) {
    next(e);
  }
};

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const { role, user } = req;
  res.status(OK_CODE).json({
    role,
    user,
  });
};

export { loginUserController, registerUserController, verifyToken };
