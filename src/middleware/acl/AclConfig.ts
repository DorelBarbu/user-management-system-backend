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
    POST: [UserPermissions.CREATE_ROLES, UserPermissions.CREATE_USERS],
  },
  "/user": {
    GET: [UserPermissions.VIEW_USERS]
  }
};

class Acl {
  constructor(private config: AclConfig) {}

  getRequiredPermissions(path: string, verb: string): UserPermissions[] {
    return this.config[path]?.[verb];
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
