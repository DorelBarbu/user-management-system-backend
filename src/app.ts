import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import auth from './routers/auth';

import user from './routers/UserRouter';
import errorHandler from './middleware/ErrorHandler';
import roleRouter from './domain/role/RoleRouter';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', auth);
app.use('/user', user);
app.use('/role', roleRouter);

app.use(errorHandler);

export default app;
