exports.checkRole = (...roles) => {
  // Flatten in case array was passed
  const allowed = roles.flat();

  return (req, res, next) => {
    try {
      if (!req.user || !req.user.role) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized: User context missing",
        });
      }

      if (!allowed.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: `Access denied: Requires role [${allowed.join(", ")}] but current user is [${req.user.role}]`,
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || "Role verification error",
      });
    }
  };
};