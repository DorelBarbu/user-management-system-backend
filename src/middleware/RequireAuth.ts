import express from "express";
import { jwtConfig } from "../config/jwt.config";
import UnauthorizedError from "../errorHandling/UnauthorizedError";
import { verify } from "../services/JwtService";

const getToken = (req: express.Request): string | undefined => {
  const token = req.headers.authorization?.split(" ")[1];
  return token;
};

export const requireAuth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = getToken(req);

  if (!token) {
    return next(new UnauthorizedError());
  }

  try {
    const decodedToken = verify(token, jwtConfig) as { id: string };
    req.userId = decodedToken.id;
    return next();
  } catch (e) {
    return next(new UnauthorizedError());
  }
};
