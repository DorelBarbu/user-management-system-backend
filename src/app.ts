import express from 'express';
import auth from './routers/auth';
import dotenv from 'dotenv';
import user from './routers/UserRouter';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', auth);
app.use('/user', user);

export default app;
