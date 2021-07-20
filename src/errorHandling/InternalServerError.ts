import ApplicationError from "./ApplicationError";

class InternalServerError extends ApplicationError {
  constructor() {
    super('There was a problem processing your request. Please contact your administrator', 500, true);
  }
}


export default InternalServerError;