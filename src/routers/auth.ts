import express from 'express';
import { verifyTokenController } from '../controllers/auth';
import { requireAuth } from '../middleware/RequireAuth';

const auth = express.Router();

auth.get('/verify', requireAuth, verifyTokenController);

export default auth;