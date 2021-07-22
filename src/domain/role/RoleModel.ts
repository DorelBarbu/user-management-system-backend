import { Schema, Model, model } from "mongoose";
import { UserPermissions } from "../../middleware/acl/UserPermissions";

export interface IRoleModel {
  name: string;
  permissions: UserPermissions[];
}

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  permissions: {
    type: [{
      type: String,
      enum: UserPermissions
    }]
  }
});

const RoleModel: Model<IRoleModel> = model("Role", roleSchema);

export default RoleModel;
