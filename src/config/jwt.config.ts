export interface JwtConfig {
  secret: string;
  expiresIn: number;
}

export const jwtConfig: JwtConfig = {
  secret: 'af882fn8n28n1c',
  expiresIn: 60
}