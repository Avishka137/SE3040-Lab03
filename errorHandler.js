// Error Handler Utility
// Provides centralized error handling for Node.js applications

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

const handleError = (err) => {
  const { statusCode, message } = err;
  console.error(`[Error ${statusCode || 500}]: ${message}`);
  console.error('Stack Trace:', err.stack);
};

// Example usage
const createCustomError = (message, code = 500) => {
  return new ErrorHandler(message, code);
};

module.exports = {
  ErrorHandler,
  handleError,
  createCustomError
};

// Demo: Uncomment to test
// try {
//   throw createCustomError('Database connection failed', 503);
// } catch (error) {
//   handleError(error);
// }
