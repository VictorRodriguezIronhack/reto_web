const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    next(createError(401, 'User is not authenticated'))
  }
};

module.exports.checkRole = (role) => {
  return (req, res, next) => {
      if (req.user.role === role) {
          next();
      } else {
          next(createError(403, 'Path is forbidden'));
      };
  };
};