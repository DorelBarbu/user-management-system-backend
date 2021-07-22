import ApplicationError from "../../errorHandling/ApplicationError";
import BadRequestError from "../../errorHandling/BadRequestError";
import { getPermissionsByName } from "../permission/PermissionRepository";
import RoleModel from "./RoleModel";

interface InsertRoleDTO {
  name: string;
  permissions: string[];
}

/**
 * This function inserts a new role into the database, by checking
 * if the mentioned permissions exist in the database.
 * If we try to insert a permission that is not in the database,
 * an ApplicationError will be thrown
 * @param roleDTO - information about the new role
 */
export const insertRole = async (roleDTO: InsertRoleDTO) => {
  const exsitingPermissions = await getPermissionsByName(roleDTO.permissions);
  // roleDTO.permissions.forEach(permission => {
  //     if(!exsitingPermissions.find(exsitingPermission => permission === exsitingPermission.name)) {
  //       throw new BadRequestError('Invalid permissions');
  //     }
  // });

  const newRole = await new RoleModel(roleDTO).save();

  return newRole;
};
