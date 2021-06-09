import ApplicationError from "./ApplicationError";
import { BAD_REQUEST } from "./ErrorTypes";

class BadRequestError extends ApplicationError {
  constructor(description: string) {
    super(BAD_REQUEST, description, 400, true);
  }
}


export default BadRequestError;