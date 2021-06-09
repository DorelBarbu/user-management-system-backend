import Joi from 'joi';

const registerUserRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

export default registerUserRequestSchema;