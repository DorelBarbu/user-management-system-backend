import { Schema, Model, model } from "mongoose";

interface IRoleModel {
  name: string;
  permissions: string[];
}

const roleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  permissions: {
    type: [String],
    required: true
  }
});

const RoleModel: Model<IRoleModel> = model("Role", roleSchema);

export default RoleModel;
