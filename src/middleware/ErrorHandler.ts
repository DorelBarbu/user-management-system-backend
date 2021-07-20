import { Request, Response, NextFunction } from 'express';
import ApplicationError from '../errorHandling/ApplicationError';
import InternalServerError from '../errorHandling/InternalServerError';

const errorHandler = (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  console.log('enter here');
  if(err.isOperational) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json(new InternalServerError());
  }
}

export default errorHandler;