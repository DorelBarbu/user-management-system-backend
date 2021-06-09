import {Router} from 'express';
import registerUser from '../domain/user/UserController';
import registerUserRequestSchema from '../domain/user/validators/RegisterUserRequest';
import validateRequest from '../middleware/ValidateRequestBody';

const user = Router();

user.post('/register', validateRequest(registerUserRequestSchema), registerUser);

export default user;