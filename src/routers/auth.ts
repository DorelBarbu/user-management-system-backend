import express from 'express';
import { requireAuth } from '../middleware/RequireAuth';

const auth = express.Router();

auth.get('/verify', requireAuth, (req, res) => {
  res.status(200).json({
    message: 'it works'
  });
});

export default auth;