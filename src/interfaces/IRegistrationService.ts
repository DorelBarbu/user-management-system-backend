export interface RegisterUserDTO {
  password: string;
  username: string;
  email: string;
}

export interface IRegistrationService {
  register(userInfoDTO: RegisterUserDTO): Promise<{
    user: RegisterUserDTO,
    token: string,
    id: string
  }>;
}