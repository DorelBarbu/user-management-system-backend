import Joi from 'joi';

const registerUserRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required()
});

export default registerUserRequestSchema;