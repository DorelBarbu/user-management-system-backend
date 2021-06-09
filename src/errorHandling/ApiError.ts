/**
 * When an error occurs as a result of calling the API, an ApiEror is sent to the client.
 */
class ApiError extends Error {
  constructor(public message: string) {
    super(message);
  }
}

class BadRequestError extends ApiError {
}

export default ApiError;