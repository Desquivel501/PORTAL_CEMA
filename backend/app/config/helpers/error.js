class CustomError extends Error {
  constructor(message, name = 'CustomError') {
    super(message);
    this.name = name;
  }
}

module.exports = CustomError;