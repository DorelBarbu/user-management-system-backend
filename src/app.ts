import express from 'express';
import auth from './routers/auth';

const app = express();

app.use('/auth', auth);

export default app;
