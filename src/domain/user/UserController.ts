import { Response, Request, NextFunction } from "express";
import { OK_CODE } from "../../errorHandling/ResponseCodes";
import { hashPassword } from "../../utils/hashPassword";
import RegisterUserDTO from "./interfaces/RegisterUserDTO";
import User from "./interfaces/User";
import { registerUser } from "./UserService";

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

    registerUserResponse.password = '';

    res.status(OK_CODE).json(registerUserResponse);
  } catch (e) {
    console.log('an error has occured');
    return next(e);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  res.status(OK_CODE).json({
    message: "log in route",
  });
};

export { loginUser, registerUserController };
