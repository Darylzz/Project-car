const { User } = require("../models");
const { validateRegister, validateLogin } = require("../validator/authValidate");
const createError = require("../util/createError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const value = validateRegister(req.body);
    const user = await User.findOne({
      where: {
        email: value.email || ""
      }
    });
    if (user) {
      createError("Email is already in use", 404);
    }
    value.password = await bcrypt.hash(value.password, 12);
    await User.create(value);
    res.status(200).json({ message: "Register success" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const value = validateLogin(req.body);
    const user = await User.findOne({
      where: {
        email: value.email
      }
    });
    if (!user) {
      createError("Invalid Email or password", 400);
    }
    const isCorrect = await bcrypt.compare(value.password, user.password);
    if (!isCorrect) {
      createError("Invalid Email or password", 400);
    }
    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        password: user.password
      },
      "QWERTY",
      {
        expiresIn: "7d"
      }
    );
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (err) {
    next(err);
  }
};
