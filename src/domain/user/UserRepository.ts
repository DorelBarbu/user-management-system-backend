import RegisterUserDTO from "./interfaces/RegisterUserDTO";
import UserModel from "./UserModel";

export const insertUser = async (registerUserDto: RegisterUserDTO) => {
  const newUser = new UserModel(registerUserDto);
  await newUser.save();
  return newUser;
}

export default insertUser;