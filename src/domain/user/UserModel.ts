import { Schema, Model, Document, model } from "mongoose";

import User from './interfaces/User';
import { UserPermissions } from "../../middleware/acl/UserPermissions";

export interface IUser extends Document, User {};

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true
  },
  permissions: {
    type: [{
      type: String,
      enum: UserPermissions
    }]
  }
});

const UserModel: Model<IUser> = model('User', userSchema);

export default UserModel;

