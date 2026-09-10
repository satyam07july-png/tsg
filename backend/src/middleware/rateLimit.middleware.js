// High-performance sliding-window in-memory rate limiter (zero dependencies)

const rateLimiters = new Map();

const rateLimit = ({ windowMs = 60 * 1000, max = 100, message = "Too many requests, please try again later." } = {}) => {
  return (req, res, next) => {
    const ip = req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "global";
    const now = Date.now();

    if (!rateLimiters.has(ip)) {
      rateLimiters.set(ip, []);
    }

    const timestamps = rateLimiters.get(ip);

    // Remove expired timestamps
    while (timestamps.length && timestamps[0] <= now - windowMs) {
      timestamps.shift();
    }

    if (timestamps.length >= max) {
      const retryAfter = Math.ceil((timestamps[0] + windowMs - now) / 1000);
      res.setHeader("Retry-After", retryAfter);
      return res.status(429).json({
        success: false,
        message,
        retryAfterSeconds: retryAfter,
      });
    }

    timestamps.push(now);
    next();
  };
};

// Periodic cleanup every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimiters.entries()) {
    while (timestamps.length && timestamps[0] <= now - 15 * 60 * 1000) {
      timestamps.shift();
    }
    if (timestamps.length === 0) {
      rateLimiters.delete(ip);
    }
  }
}, 5 * 60 * 1000).unref();

module.exports = rateLimit;
