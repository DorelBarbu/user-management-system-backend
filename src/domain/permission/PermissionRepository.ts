import PermissionModel from "./PermissionModel";

export const getPermissionsByName = async (permissionNames: string[]) => {
  const permissions =  await PermissionModel.find({
    name: {
      $in: permissionNames
    }
  });

  return permissions;
};
