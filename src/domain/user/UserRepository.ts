import RegisterUserDTO from "./interfaces/RegisterUserDTO";
import UserModel from "./UserModel";

export const insertUser = async (registerUserDto: RegisterUserDTO) => {
  const newUser = new UserModel(registerUserDto);
  await newUser.save();
  return newUser;
};

export const getByUsername = async (username: string) => {
  const user = await UserModel.find({ username });
  return user;
};

export default insertUser;
