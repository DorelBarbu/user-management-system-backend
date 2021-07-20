import { Schema, model, Model } from "mongoose";

interface IPermission {
  name: string;
}

const permissionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const PermissionModel: Model<IPermission> = model(
  "Permission",
  permissionSchema
);

export default PermissionModel;
