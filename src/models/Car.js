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
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      underscored: true
    }
  );
  Car.associate = db => {
    Car.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
    Car.belongsTo(db.Type, {
      foreignKey: {
        name: "typeId"
      }
    });
  };
  return Car;
};
