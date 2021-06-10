import RegisterUserDTO from "./interfaces/RegisterUserDTO";
import insertUser from "./UserRepository";

export const registerUser = async (registerUserDto: RegisterUserDTO) => {
  const response = await insertUser(registerUserDto);
  return response;
};
