class RateLimitError extends Error {
  constructor(...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RateLimitError)
    }

    this.name = 'RateLimitError'
    // Custom debugging information
    // this.date = new Date()
  }
}

export default RateLimitError;
