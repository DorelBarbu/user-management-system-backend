import { Schema, Model, Document, model } from "mongoose";

import User from './interfaces/User';
import { UserRoles } from "../../middleware/acl/UserRoles";

interface IUser extends Document, User {};

const userSchema = new Schema({
  email: {
    type: String,
    required: true
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
    required: true
  },
  role: {
    type: String,
    enum: UserRoles,
    required: true
  }
});

const UserModel: Model<IUser> = model('User', userSchema);

export default UserModel;

