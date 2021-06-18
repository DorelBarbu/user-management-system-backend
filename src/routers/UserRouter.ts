import { Router } from "express";
import {
  registerUserController,
  loginUserController,
} from "../domain/user/UserController";
import loginUserRequestSchema from "../domain/user/validators/LoginUserRequest";
import registerUserRequestSchema from "../domain/user/validators/RegisterUserRequest";
import validateRequest from "../middleware/ValidateRequestBody";

const user = Router();

user.post(
  "/register",
  validateRequest(registerUserRequestSchema),
  registerUserController
);

user.get(
  "/login",
  validateRequest(loginUserRequestSchema),
  loginUserController
);

export default user;
