const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
    
  if (req.isAuthenticated()) {
    next();
  } else {
    next(createError(401, 'user is not authenticated'))
  }
};
