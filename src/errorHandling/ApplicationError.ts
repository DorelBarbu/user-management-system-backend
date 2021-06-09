class ApplicationError extends Error {
  constructor(public error: string, public description: string, public code: number, public isOperational: boolean) {
    super(error);
  }
}

export default ApplicationError;