import jwt from "jsonwebtoken";

import { JwtConfig } from "../config/jwt.config";

export const verify = (token: string, jwtConfig: JwtConfig) =>
  jwt.verify(token, jwtConfig.secret);

export const sign = (payload: any, jwtConfig: JwtConfig): string => {
  const token = jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });
  return token;
};
