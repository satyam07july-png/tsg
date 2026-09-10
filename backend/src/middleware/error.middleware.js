// Centralized Production Error Handler

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;
  const isProd = process.env.NODE_ENV === "production";

  console.error(`[SERVER ERROR] ${req.method} ${req.originalUrl}:`, err);

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(isProd ? {} : { stack: err.stack }),
  });
};

module.exports = errorHandler;
