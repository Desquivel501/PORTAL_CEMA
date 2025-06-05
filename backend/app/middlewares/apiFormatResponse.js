function responseFormatter(req, res, next) {
  res.success = (data = null, message = '', statusCode = 200) => {
    res.status(statusCode).json({
      success: true,
      data,
      message,
      error: null,
      statusCode
    });
  };

  res.fail = (message = 'Something went wrong', error = {}, statusCode = 500) => {
    res.status(statusCode).json({
      success: false,
      data: null,
      message,
      error,
      statusCode
    });
  };

  next();
}

const routeNotFound = (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;

  api_log({ status: 404, message: "Route not found" });

  next(error);
};

module.exports = {responseFormatter, routeNotFound};