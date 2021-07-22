import ApplicationError from "./ApplicationError";
import { BAD_REQUEST } from "./ErrorTypes";
import { FORBIDDEIN_CODE } from "./ResponseCodes";

class ForbiddenError extends ApplicationError {
  constructor() {
    super("You are not allowed to perform this action", FORBIDDEIN_CODE, true);
  }
}


export default ForbiddenError;