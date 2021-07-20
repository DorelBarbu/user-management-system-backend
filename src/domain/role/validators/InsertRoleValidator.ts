import Joi from 'joi';

const insertRoleRequestSchema = Joi.object({
  name: Joi.string().required(),
  permissions: Joi.array().items(Joi.string()).required().unique()
})

export default insertRoleRequestSchema;