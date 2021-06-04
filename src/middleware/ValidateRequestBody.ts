/**
 * This middleware uses the Joi npm package in order to validate the incoming requests
 */

import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const validateRequest =
  (validationSchema: Joi.Schema) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (validationSchema.validate(req.body).error) {
      return res.json({
        message: "INVALID REQUEST",
      });
    }
    next();
  };

export default validateRequest;