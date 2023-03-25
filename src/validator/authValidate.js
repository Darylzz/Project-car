const Joi = require("joi");

const validate = require("./validate");

const registerSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).message({
    "any.required": "Email is require",
    "string.email": "Must be valid Email",
    "string.empty": "Email is require"
  }),
  password: Joi.string().alphanum().min(6).required().trim().message({
    "string.empty": "Password is require",
    "string.alphanum": "Password must contain number or alphanum",
    "string.min": "Password must have at least 6"
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().trim().message({
    "any.only": "Confirm password not match",
    "string.empty": "Confirm password is required"
  })
});

exports.validateRegister = validate(registerSchema);

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});

exports.validateLogin = validate(loginSchema);
