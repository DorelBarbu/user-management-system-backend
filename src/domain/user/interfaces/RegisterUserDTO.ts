import User from "./User";

interface RegisterUserDTO extends User {
  password: string;
}

export default RegisterUserDTO;