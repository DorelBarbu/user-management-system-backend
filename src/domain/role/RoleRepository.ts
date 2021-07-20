import RoleModel from "./RoleModel";

interface InsertRoleDTO {
  name: string;
  permissions: string[];
}

export const insertRole = async (roleDTO: InsertRoleDTO) => {
  const newRole = new RoleModel(roleDTO);
  await newRole.save();
  return newRole;
};
