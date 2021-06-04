import {Router} from 'express';
import registerUser from '../domain/user/UserController';

const user = Router();

user.post('/register', registerUser);

export default user;