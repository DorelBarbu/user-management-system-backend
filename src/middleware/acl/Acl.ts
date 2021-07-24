import { Request, Response, NextFunction } from "express";
import { getRoleByName } from "../../domain/role/RoleRepository";
import { getUserById } from "../../domain/user/UserRepository";
import InternalServerError from "../../errorHandling/InternalServerError";
import aclModule from "./AclConfig";

import  { IRoleModel } from '../../domain/role/RoleModel';
import  { IUser } from '../../domain/user/UserModel';
import { UserPermissions } from "./UserPermissions";
import ForbiddenError from "../../errorHandling/ForbiddenError";

/**
 * This function returns the union between the permissions of the set that
 * belong to the given role, and a second array of permissions corresponding
 * to the extra permissions that an user has
 * @param user
 * @param role 
 * @returns Set<UserPermissions>
 */
export const computePermissionSet = (user: IUser, role: IRoleModel): Set<UserPermissions> => {
  const permissionSet = new Set(user.permissions);
  role.permissions.forEach(permission => permissionSet.add(permission));
  return permissionSet;
}

export const acl = async (req: Request, res: Response, next: NextFunction) => {
  const user = await getUserById(req.userId);
  if(!user) {
    return next(new InternalServerError());
  }

  const role = await getRoleByName(user.role.toString());
  if(!role) {
    return next(new InternalServerError());
  }

  const permissionSetForCurrentUser = computePermissionSet(user, role);
  if(!aclModule.can(req.originalUrl, req.method, permissionSetForCurrentUser)) {
    next(new ForbiddenError());
  }

  return next();
};
