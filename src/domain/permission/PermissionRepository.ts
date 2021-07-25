import PermissionModel from "./PermissionModel";

export const getPermissionsByName = async (permissionNames: string[]) => {
  const permissions =  await PermissionModel.find({
    name: {
      $in: permissionNames
    }
  });

  return permissions;
};

export const getAllPermissions = async () => {
  const permissions = await PermissionModel.find();
  return permissions;
}