import ApplicationError from "../../errorHandling/ApplicationError";
import {
  USERNAME_OR_PASSWORD_INCORRECT,
  USER_ALREADY_EXISTS,
} from "../../errorHandling/ErrorMessages";
import {
  RESOURCE_ALREADY_EXISTS_CODE,
  UNAUTHORIZED_CODE,
} from "../../errorHandling/ResponseCodes";
import { comparePasswords } from "../../utils/hashPassword";
import LoginUserDTO from "./interfaces/LoginUserDTO";
import RegisterUserDTO from "./interfaces/RegisterUserDTO";
import { sign } from "../JwtService";
import {
  insertUser,
  getByUsername,
  getByUsernameOrEmail,
} from "../../domain/user/UserRepository";
import { jwtConfig } from "../../config/jwt.config";

export const registerUser = async (registerUserDto: RegisterUserDTO) => {
  const existingUser = await getByUsernameOrEmail(
    registerUserDto.username,
    registerUserDto.email
  );
  const response = await insertUser(registerUserDto);
  return response;
};

export const loginUser = async (loginUser: LoginUserDTO) => {
  const existingUser = await getByUsername(loginUser.username);
  if (
    existingUser &&
    comparePasswords(loginUser.password, existingUser.password)
  ) {
    return {
      user: {
        username: existingUser.username,
        email: existingUser.email,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName
      },
      token: sign(
        {
          id: existingUser._id,
        },
        jwtConfig
      ),
    };
  }

  throw new ApplicationError(
    USERNAME_OR_PASSWORD_INCORRECT,
    UNAUTHORIZED_CODE,
    true
  );
};
