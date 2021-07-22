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

export const getRoleByName = async(name: string) => {
  const role = await RoleModel.findOne({
    name
  });
  return role;
}

export const getAllRoles = async () => {
  const roles = await RoleModel.find();
  return roles;
}