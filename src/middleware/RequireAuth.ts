import e from "express";
import express from "express";
import { jwtConfig } from "../config/jwt.config";
import { getRoleByName } from "../domain/role/RoleRepository";
import { getUserById } from "../domain/user/UserRepository";
import InternalServerError from "../errorHandling/InternalServerError";
import UnauthorizedError from "../errorHandling/UnauthorizedError";
import { verify } from "../services/JwtService";

export const getToken = (req: express.Request): string | undefined => {
  const token = req.headers.authorization?.split(" ")[1];
  return token;
};

export const requireAuth = async (
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
    const userId = decodedToken.id;
    const user = await getUserById(userId);

    if(user) {
      const role = await getRoleByName(user.role);
      req.userId = decodedToken.id;
      user.password = '';
      req.user = user;
      if(role) {
        req.role = role;
      } else {
        return next(new InternalServerError());
      }
    } else {
      return next(new InternalServerError());
    }

    return next();
  } catch (e) {
    return next(new UnauthorizedError());
  }
};
