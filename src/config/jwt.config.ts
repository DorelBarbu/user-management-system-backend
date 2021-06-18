export interface JwtConfig {
  secret: string;
  expiresIn: number;
}

console.log(process.env.TOKEN_SECRET);

export const jwtConfig: JwtConfig = {
  secret: process.env.TOKEN_SECRET as string,
  expiresIn: Number.parseInt(process.env.EXPIRES_IN as string)
}