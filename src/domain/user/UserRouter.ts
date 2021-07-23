import { Router } from "express";
import {
  registerUserController,
  loginUserController,
} from "../../services/auth/AuthController";
import loginUserRequestSchema from "./validators/LoginUserRequest";
import registerUserRequestSchema from "./validators/RegisterUserRequest";
import validateRequest from "../../middleware/ValidateRequestBody";

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
