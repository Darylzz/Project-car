module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false
        }
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false
        }
      },
      type: {
        type: DataTypes.ENUM("Europe", "Japan"),
        allowNull: false,
        validate: {
          notEmpty: false
        }
      }
    },
    {
      underscored: true
    }
  );
  return Car;
};
