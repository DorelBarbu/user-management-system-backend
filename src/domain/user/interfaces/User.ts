import { UserPermissions } from "../../../middleware/acl/UserPermissions";
import LoginUserDTO from "./LoginUserDTO";

export default interface User extends LoginUserDTO {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  permissions: UserPermissions[];
}