const Joi = require("joi");

const validate = require("./validate");

const addCarSchema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  image: Joi.string().required()
});

exports.validateAddCarSchema = validate(addCarSchema);
