import {
  IRegistrationService,
  RegisterUserDTO,
} from "../../src/interfaces/IRegistrationService";

export class RegistrationService implements IRegistrationService {
  register(
    userInfoDTO: RegisterUserDTO
  ): Promise<{ user: RegisterUserDTO; token: string; id: string }> {
    return Promise.resolve({
      user: userInfoDTO,
      token: '1234455',
      id: 'asfasfa1231'
    });
  }
}
