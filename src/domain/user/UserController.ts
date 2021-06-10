import { Response, Request, NextFunction } from "express";
import { OK_CODE } from "../../errorHandling/ResponseCodes";
import { hashPassword } from "../../utils/hashPassword";
import RegisterUserDTO from "./interfaces/RegisterUserDTO";
import { registerUser } from "./UserService";

const registerUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await registerUser({
      ...req.body,
      password: hashPassword(req.body.password),
    } as RegisterUserDTO);

    res.status(OK_CODE).json({
      id: response._id,
      username: response.username,
      email: response.email,
      firstName: response.firstName,
      lastName: response.lastName,
    });
  } catch (e) {
    return next(e);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  res.status(OK_CODE).json({
    message: "log in route",
  });
};

export { loginUser, registerUser };
