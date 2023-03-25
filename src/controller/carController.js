const { Car } = require("../models");
const createError = require("../util/createError");
const { validateAddCarSchema } = require("../validator/carValidate");

exports.userAddCar = async (req, res, next) => {
  try {
    const value = validateAddCarSchema({
      brand: req.body.brand,
      model: req.body.model,
      image: req.file?.path
    });
    value.userId = req.user.id;
    await Car.create({
      brand: value.brand,
      model: value.model,
      image: value.image,
      userId: value.userId
    });
    res.status(200).json({ message: "Add car success" });
  } catch (err) {
    next(err);
  }
};

exports.updateUserCar = async (req, res, next) => {
  try {
    const { carId } = req.params;
    // console.log(carId);
    const car = await Car.findOne({
      where: {
        id: carId
      }
    });
    // console.log(car);
    if (car.userId !== req.user.id) {
      createError("You not have permission to update this car", 400);
    }
    const value = validateAddCarSchema({
      brand: req.body.brand,
      model: req.body.model,
      image: req.file?.path
    });
    await car.update({
      brand: value.brand,
      model: value.model,
      image: value.image
    });
    res.status(200).json({ message: "Update car success" });
  } catch (err) {
    next(err);
  }
};

exports.deleteUserCar = async (req, res, next) => {
  try {
    const { carId } = req.params;
    // console.log(carId);
    const car = await Car.findOne({
      where: {
        id: carId
      }
    });
    if (car.userId !== req.user.id) {
      createError("You not have permission to delete", 400);
    }
    await car.destroy();
    res.status(200).json({ message: "Delete car success" });
  } catch (err) {
    next(err);
  }
};
