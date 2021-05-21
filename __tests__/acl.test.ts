import Acl from "../middleware/acl/Acl";
import { AclConfig } from "../middleware/acl/AclConfig";

const aclConfig: AclConfig[] = [
  {
    route: "/",
    rolePermissions: [
      {
        role: "admin",
        resources: ["GET", "POST", "DELETE"],
      },
    ],
  },
  {
    route: "/test",
    rolePermissions: [
      {
        role: "admin",
        resources: ["GET"],
      },
    ],
  },
];

const acl = new Acl(aclConfig);

test("User should be allowed to access resources", () => {
  expect(acl.can("/", "GET", "admin")).toBe(true);
  expect(acl.can("/", "POST", "admin")).toBe(true);
  expect(acl.can("/", "DELETE", "admin")).toBe(true);
});

test("User should not be allowed to access resources", () => {
  expect(acl.can("/test", "POST", "admin")).toBe(false);
  expect(acl.can("/test", "POST", "dummy role")).toBe(false);
  expect(acl.can("/test", "GET", "dummy role")).toBe(false);
});

