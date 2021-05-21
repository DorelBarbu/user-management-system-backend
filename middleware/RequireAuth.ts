import express from 'express';

const hasToken = (req: express.Request): boolean => {
  const token = req.headers.authorization?.split(' ')[1];
  return !!token;
};

export const requireAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if(hasToken(req)) {
    return next();
  }

  res.statusCode = 401;
  res.send('UNAUTHORIZED');
};

