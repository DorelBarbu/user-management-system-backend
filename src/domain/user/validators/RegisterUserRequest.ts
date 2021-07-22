import Joi from 'joi';
import enumToArray from '../../../utils/enumToArray';
import { UserPermissions } from '../../../middleware/acl/UserPermissions';

const registerUserRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  role: Joi.string().required(),
  permissions: Joi.array().items(Joi.string().valid(...enumToArray(UserPermissions)))
});


export default registerUserRequestSchema;