import { AclConfig, resource } from "./AclConfig";

export default class Acl {
  constructor(private aclConfig: AclConfig[]) {
    this.aclConfig = aclConfig;
  }

  public can(route: string, resource: resource, role: string): boolean {
    return (
      this.aclConfig
        .find((config) => config.route === route)
        ?.rolePermissions.find(
          (permission) =>
            permission.role === role && permission.resources.includes(resource)
        ) !== undefined
    );
  }
}
