/**
 * This is the configuration file in order to define what type of users should have access to which type of resources.
 * It is exported to be used in conjunction with the Acl module
 */

export type resource = 'GET' | 'POST' | 'DELETE' | '*';

interface RolePermission {
  role: string;
  resources: resource[];
}

export interface AclConfig {
  route: string;
  rolePermissions: RolePermission[];
}

export const aclConfig: AclConfig[] = [
  {
    route: "/",
    rolePermissions: [
      {
        role: "admin",
        resources: ["GET", "POST", "DELETE"],
      },
    ],
  },
];
