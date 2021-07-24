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
import { validateRole } from "../../domain/role/RoleService";
import { getRoleByName } from "../../domain/role/RoleRepository";
import { computePermissionSet } from "../../middleware/acl/Acl";
import InternalServerError from "../../errorHandling/InternalServerError";

export const registerUser = async (registerUserDto: RegisterUserDTO) => {
  const isRoleValid = await validateRole(registerUserDto.role);
  if (!isRoleValid) {
    throw new ApplicationError("Invalid role", 500, true);
  }

  const response = await insertUser(registerUserDto);
  return response;
};

export const loginUser = async (loginUser: LoginUserDTO) => {
  const existingUser = await getByUsername(loginUser.username);
  if (
    existingUser &&
    comparePasswords(loginUser.password, existingUser.password)
  ) {
    const role = await getRoleByName(existingUser.role);
    if (!role) {
      throw new InternalServerError();
    }
    return {
      user: existingUser,
      role,
      permissions: Array.from(computePermissionSet(existingUser, role)),
      token: sign(
        {
          id: existingUser._id,
        },
        jwtConfig
      ),
    };
  } else {
    throw new ApplicationError(
      USERNAME_OR_PASSWORD_INCORRECT,
      UNAUTHORIZED_CODE,
      true
    );
  }
};
