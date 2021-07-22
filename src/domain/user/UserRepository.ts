import RegisterUserDTO from "./interfaces/RegisterUserDTO";
import User from "./interfaces/User";
import UserModel from "./UserModel";

export const insertUser = async (registerUserDto: RegisterUserDTO) => {
  const newUser = new UserModel(registerUserDto);
  await newUser.save();
  return newUser;
};

export const getByUsername = async (username: string) => {
  const user = await UserModel.findOne({ username });
  return user;
};

export const getUserById = async (userId: string) => {
  const user = await UserModel.findById(userId);
  return user;
};

export const getUserForLogin = async (username: string, password: string) => {
  const user = await UserModel.findOne({
    username,
    password
  });
  return user;
}

export const getByUsernameOrEmail = async (username: string, email: string) => {
  const user = await UserModel.findOne({
    $or: [{ username }, { email }],
  });
  return user;
};

export default insertUser;
