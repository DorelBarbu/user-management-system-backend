import { Router } from "express";
import { registerUserController, loginUser } from "../domain/user/UserController";
import registerUserRequestSchema from "../domain/user/validators/RegisterUserRequest";
import validateRequest from "../middleware/ValidateRequestBody";

const user = Router();

user.post(
  "/register",
  validateRequest(registerUserRequestSchema),
  registerUserController
);

user.get("/login", loginUser);

export default user;
