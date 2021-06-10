import { Request, Response, NextFunction } from 'express';
import ApplicationError from '../errorHandling/ApplicationError';

const errorHandler = (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).json(err);
}

export default errorHandler;