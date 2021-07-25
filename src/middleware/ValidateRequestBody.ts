/**
 * This middleware uses the Joi npm package in order to validate the incoming requests
 */

import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import BadRequestError from "../errorHandling/BadRequestError";

const validateRequest =
  (validationSchema: Joi.Schema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const validationResult = validationSchema.validate(req.body);
    if (validationResult.error) {
      return next(new BadRequestError(validationResult.error.message));
    }
    return next();
  };

export default validateRequest;
