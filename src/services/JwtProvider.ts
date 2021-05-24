import jwt from "jsonwebtoken";
import { IJwtProvider, JwtStatus } from "../interfaces/IJwtProvider";

class JwtProvider implements IJwtProvider {
  constructor(private secret: string, private expiresIn: number) {}

  verify(token: string): JwtStatus {
    try {
      jwt.verify(token, this.secret);
      return JwtStatus.VALID;
    } catch(e) {
      return JwtStatus.INVALID;
    }
  }

  sign(payload: any): string {
    const token = jwt.sign(payload, this.secret, {
      expiresIn: this.expiresIn,
    });
    return token;
  }
}

export default JwtProvider;
