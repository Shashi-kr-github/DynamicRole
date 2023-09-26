const Joi = require('joi');

const schemas = {
  signup: Joi.object().keys({
    username: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }),

  login: Joi.object().keys({
    username: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }),
};
module.exports = schemas;
