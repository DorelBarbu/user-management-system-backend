export enum JwtStatus {
  VALID,
  INVALID
}


export interface IJwtProvider {
  verify(token: string): JwtStatus;
  sign(header: any, payload: any, secret: string): string;
}