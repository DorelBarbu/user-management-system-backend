import Joi from 'joi';
import UserModel from '../UserModel';
import { UserRoles } from '../../../middleware/acl/UserRoles';
import enumToArray from '../../../utils/enumToArray';
import { UserPermissions } from '../../../middleware/acl/UserPermissions';

const registerUserRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  role: Joi.string().valid(...enumToArray(UserRoles)).required(),
  permissions: Joi.array().items(Joi.string())
});

export default registerUserRequestSchema;