const createError = require("http-errors");
const Opinion = require("../models/opinion.model");


module.exports.create = (req, res, next) => {
  const userWithOpinion = req.foundPhone.opinions.find(opinion => opinion.owner.id == req.user.id);

  if (userWithOpinion) {
    next(createError(401, 'You have already given your opinion of this product'))
  } else {
    Opinion.create({
      ...req.body,
      owner: req.user.id,
      phone: req.foundPhone.id
    })
      .then((opinion) => res.status(201).json(opinion))
      .catch(next);
  }
};
