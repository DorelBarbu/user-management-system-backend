import ApplicationError from "./ApplicationError";
import { UNAUTHORIZED_CODE } from "./ResponseCodes";

class UnauthorizedError extends ApplicationError {
  constructor() {
    super("UNAUTHORIZED", UNAUTHORIZED_CODE, true);
  }
}


export default UnauthorizedError;