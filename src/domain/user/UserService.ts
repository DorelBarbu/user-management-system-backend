import ApplicationError from "../../errorHandling/ApplicationError";
import { USERNAME_OR_PASSWORD_INCORRECT, USER_ALREADY_EXISTS } from "../../errorHandling/ErrorMessages";
import { RESOURCE_ALREADY_EXISTS_CODE, UNAUTHORIZED_CODE } from "../../errorHandling/ResponseCodes";
import { hashPassword } from "../../utils/hashPassword";
import LoginUserDTO from "./interfaces/LoginUserDTO";
import RegisterUserDTO from "./interfaces/RegisterUserDTO";
import { sign } from '../../services/JwtService';
import insertUser, {
  getByUsernameOrEmail,
  getUserForLogin,
} from "./UserRepository";
import { jwtConfig } from "../../config/jwt.config";

export const registerUser = async (registerUserDto: RegisterUserDTO) => {
  const existingUser = await getByUsernameOrEmail(
    registerUserDto.username,
    registerUserDto.email
  );
  if (existingUser) {
    throw new ApplicationError(
      USER_ALREADY_EXISTS,
      RESOURCE_ALREADY_EXISTS_CODE,
      true
    );
  }
  const response = await insertUser(registerUserDto);
  return response;
};

export const loginUser = async (loginUser: LoginUserDTO) => {
  const existingUser = await getUserForLogin(
    loginUser.username,
    hashPassword(loginUser.password)
  );

  if(existingUser) {
    return {
      existingUser,
      token: sign(existingUser, jwtConfig)
    }
  }

  throw new ApplicationError(
    USERNAME_OR_PASSWORD_INCORRECT,
    UNAUTHORIZED_CODE,
    true
  );
};
