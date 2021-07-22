import ApplicationError from "../../errorHandling/ApplicationError";
import BadRequestError from "../../errorHandling/BadRequestError";
import { getPermissionsByName } from "../permission/PermissionRepository";
import RoleModel from "./RoleModel";
import { getAllRoles } from "./RoleRepository";

interface InsertRoleDTO {
  name: string;
  permissions: string[];
}

/**
 * This function inserts a new role into the database
 * @param roleDTO - information about the new role
 */
export const insertRole = async (roleDTO: InsertRoleDTO) => {
  const isRoleValid = await validateRole(roleDTO.name);
  
  const newRole = await new RoleModel(roleDTO).save();

  return newRole;
};

export const validateRole = async (roleName: string): Promise<boolean> => {
  const roles = await getAllRoles();
  return !!roles.find(role => role.name === roleName);
}
