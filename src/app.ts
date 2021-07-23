import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import user from './domain/user/UserRouter';
import errorHandler from './middleware/ErrorHandler';
import roleRouter from './domain/role/RoleRouter';
import authRouter from "./services/auth/AuthRouter";


const app = express();

app.use(cors());
app.use(express.json());


app.use('/user', user);
app.use('/role', roleRouter);
app.use('/auth', authRouter);

app.use(errorHandler);

export default app;
