export interface JwtConfig {
  secret: string;
  expiresIn: number;
}

export const jwtConfig: JwtConfig = {
  secret: process.env.TOKEN_SECRET as string,
  expiresIn: Number.parseInt(process.env.EXPIRES_IN as string)
}