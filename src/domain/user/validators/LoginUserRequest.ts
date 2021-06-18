import Joi from 'joi';

const loginUserRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

export default loginUserRequestSchema;