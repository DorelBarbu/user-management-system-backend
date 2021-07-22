import Joi from 'joi';
import { UserPermissions } from '../../../middleware/acl/UserPermissions';
import enumToArray from '../../../utils/enumToArray';

const insertRoleRequestSchema = Joi.object({
  name: Joi.string().required(),
  permissions: Joi.array().items(Joi.string().valid(...enumToArray(UserPermissions)))
})

export default insertRoleRequestSchema;