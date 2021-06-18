import { Response, Request, NextFunction } from "express";
import { OK_CODE } from "../../errorHandling/ResponseCodes";
import { hashPassword } from "../../utils/hashPassword";
import { registerUser, loginUser } from "./UserService";

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

const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('HERE');
    const loginResult = await loginUser({
      username: req.body.username,
      password: req.body.password
    });
    console.log(loginResult);
    //res.status(OK_CODE).json(loginResult);
  } catch(e) {
    next(e);
  }
};

export { loginUserController, registerUserController };
