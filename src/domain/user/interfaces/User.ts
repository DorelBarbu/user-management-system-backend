import { UserPermissions } from "../../../middleware/acl/UserPermissions";
import { UserRoles } from "../../../middleware/acl/UserRoles";
import LoginUserDTO from "./LoginUserDTO";

export default interface User extends LoginUserDTO {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
  permissions: UserPermissions[];
}