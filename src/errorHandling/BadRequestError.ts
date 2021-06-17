import ApplicationError from "./ApplicationError";
import { BAD_REQUEST } from "./ErrorTypes";

class BadRequestError extends ApplicationError {
  constructor(description: string) {
    super(description, 400, true);
  }
}


export default BadRequestError;