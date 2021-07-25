import { Router } from "express";
import {
  registerUserController,
  loginUserController,
} from "../../services/auth/AuthController";
import loginUserRequestSchema from "./validators/LoginUserRequest";
import registerUserRequestSchema from "./validators/RegisterUserRequest";
import validateRequest from "../../middleware/ValidateRequestBody";
import { getAllUsersController } from "./UserController";
import { requireAuth } from "../../middleware/RequireAuth";
import { acl } from "../../middleware/acl/Acl";

const user = Router();

user.post(
  "/register",
  // requireAuth,
  // acl,
  validateRequest(registerUserRequestSchema),
  registerUserController
);

user.post(
  "/login",
  validateRequest(loginUserRequestSchema),
  loginUserController
);


user.get(
  "",
  requireAuth,
  acl,
  getAllUsersController
);

export default user;
