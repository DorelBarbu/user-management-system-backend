import { Router } from "express";
import {
  registerUserController,
  loginUserController,
} from "../services/auth/AuthController";
import loginUserRequestSchema from "../domain/user/validators/LoginUserRequest";
import registerUserRequestSchema from "../domain/user/validators/RegisterUserRequest";
import validateRequest from "../middleware/ValidateRequestBody";

const user = Router();

user.post(
  "/register",
  validateRequest(registerUserRequestSchema),
  registerUserController
);

user.post(
  "/login",
  validateRequest(loginUserRequestSchema),
  loginUserController
);

export default user;
