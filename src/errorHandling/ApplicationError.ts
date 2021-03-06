class ApplicationError extends Error {
  constructor(public error: string, public status: number, public isOperational: boolean) {
    super(error);
  }
}

export default ApplicationError;