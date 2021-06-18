import User from "../../../domain/user/interfaces/User";

interface RegisterUserDTO extends User {
  password: string;
}

export default RegisterUserDTO;