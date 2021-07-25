/**
 * This is the configuration file in order to define what type of users should have access to which type of resources.
 * It is exported to be used in conjunction with the Acl module
 */

import { UserPermissions } from "./UserPermissions";

export type verb = "GET" | "POST" | "DELETE" | "PUT";

type RouteConfig = {
  [key: string]: UserPermissions[];
};

interface AclConfig {
  [key: string]: RouteConfig;
}

const aclConfig: AclConfig = {
  "/role": {
    POST: [UserPermissions.CREATE_ROLES],
    GET: [UserPermissions.CREATE_ROLES]
  },
  "/user": {
    GET: [UserPermissions.VIEW_USERS]
  },
  "/user/register": {
    POST: [UserPermissions.CREATE_USERS]
  },
  "/permission": {
    GET: [UserPermissions.CREATE_ROLES, UserPermissions.CREATE_USERS]
  },
  "/company": {
    GET: [UserPermissions.VIEW_COMPANY],
    POST: [UserPermissions.CREATE_COMPANY]
  }
};

class Acl {
  constructor(private config: AclConfig) {}

  getRequiredPermissions(path: string, verb: string): UserPermissions[] {
    if(this.config[path]) {
      return this.config[path][verb];
    }
    return [];
  }

  can(path: string, verb: string, permissionSet: Set<UserPermissions>) : boolean {
    const requiredPermissions = this.getRequiredPermissions(path, verb);

    if(requiredPermissions.length === 0) {
      return true;
    }

    for(let permission of requiredPermissions) {
      if(!permissionSet.has(permission)) {
        return false;
      }
    }

    return true;
  }
}


export default new Acl(aclConfig);
